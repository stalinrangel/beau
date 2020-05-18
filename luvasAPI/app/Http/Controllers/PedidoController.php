<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;

class PedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //cargar todos los pedidos
        $pedidos = \App\Pedido::
            with(['usuario' => function ($query) {
                $query->select('id', 'email', 'nombre', 'direccion', 'imagen', 'activo');
            }])
            /*->with('productos')*/
            ->orderBy('id', 'desc')
            ->get();

        return response()->json(['pedidos'=>$pedidos], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Primero comprobaremos si estamos recibiendo todos los campos obligatorios.
        if (!$request->input('subtotal') ||
            !$request->input('usuario_id') ||
            !$request->input('productos'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['error'=>'Faltan datos necesarios para el proceso de alta.'],422);
        }

        //validaciones
        $aux1 = \App\User::find($request->input('usuario_id'));
        if(count($aux1) == 0){
           // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'No existe el usuario al cual se quiere asociar el pedido.'], 409);
        }

        //Verificar que todos los productos del pedido existen
        $productos = json_decode($request->input('productos'));
        for ($i=0; $i < count($productos) ; $i++) { 
            $prod = \App\Producto::find($productos[$i]->id);
            if(count($prod) == 0){
               // Devolvemos un código 409 Conflict. 
                return response()->json(['error'=>'No existe el producto con id '.$productos[$i]->id], 409);
            }  

            $color_id = $productos[$i]->colores[0]->id;
            $color = \App\Color::find($color_id);
            if(count($color) == 0){
               // Devolvemos un código 409 Conflict. 
                return response()->json(['error'=>'No existe el color con id '.$color_id], 409);
            }

            $atributo_id = $productos[$i]->colores[0]->atributos[0]->id;
            $atributo = \App\Atributo::find($atributo_id);
            if(count($atributo) == 0){
               // Devolvemos un código 409 Conflict. 
                return response()->json(['error'=>'No existe el atributo con id '.$atributo_id], 409);
            }

             
        }    

        if($nuevoPedido=\App\Pedido::create([
            'estado'=>1,
            'subtotal'=>$request->input('subtotal'),
            'total'=>$request->input('subtotal'),
            'country'=>$request->input('country'), 
            'state'=>$request->input('state'),
            'postcode'=>$request->input('postcode'),
            'address'=>$request->input('address'),
            'usuario_id'=>$request->input('usuario_id')
            ])){

            //Crear las relaciones en la tabla pivote
            for ($i=0; $i < count($productos) ; $i++) {

                $subtotal = $productos[$i]->cantidad * $productos[$i]->colores[0]->atributos[0]->precio;

                $nuevoPedido->productos()->attach($productos[$i]->id, [
                    'color_id' => $productos[$i]->colores[0]->id,
                    'atributo_id' => $productos[$i]->colores[0]->atributos[0]->id,
                    'cantidad' => $productos[$i]->cantidad,
                    'precio_unitario' => $productos[$i]->colores[0]->atributos[0]->precio,
                    'subtotal' => $subtotal]);

                //Descontar el inventario
                $descontar = $productos[$i]->colores[0]->atributos[0]->cantidad - $productos[$i]->cantidad; 
                DB::table('atributos')
                ->where('id', $productos[$i]->colores[0]->atributos[0]->id)
                ->update(['cantidad' => $descontar]);

                //aumentar las ventas del producto
                $productoAux = \App\Producto::find($productos[$i]->id);
                if(count($productoAux)!=0){
                   $productoAux->count_ventas = $productoAux->count_ventas + 1;
                   $productoAux->save();         
                }
                   
            }

            return response()->json(['pedido'=>$nuevoPedido, 'message'=>'Pedido creado con éxito.'], 200);
        }else{
            return response()->json(['error'=>'Error al crear el pedido.'], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //cargar un pedido
        $pedido = \App\Pedido::
            with(['usuario' => function ($query) {
                $query->select('id', 'email', 'nombre', 'telefono', 'direccion', 'imagen', 'activo');
            }])
            ->with('productos')
            ->find($id);

        if(count($pedido)==0){
            return response()->json(['error'=>'No existe el pedido con id '.$id], 404);          
        }else{

            for ($i=0; $i < count($pedido->productos); $i++) { 

                $color = \App\Color::find($pedido->productos[$i]->pivot->color_id);
                $color->imagen = json_decode($color->imagen);
                $pedido->productos[$i]->color = $color;

                $pedido->productos[$i]->atributo = \App\Atributo::find($pedido->productos[$i]->pivot->atributo_id);
            }

            //$pedido->productos = $pedido->productos;
            return response()->json(['pedido'=>$pedido], 200);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Comprobamos si el pedido que nos están pasando existe o no.
        $pedido=\App\Pedido::find($id);

        if (count($pedido)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el pedido con id '.$id], 404);
        }      

        // Listado de campos recibidos teóricamente.
        $estado=$request->input('estado');
        $metodo_pago=$request->input('metodo_pago');
        $ref_pago=$request->input('ref_pago');
        $subtotal=$request->input('subtotal');
        $total=$request->input('total');
        $country=$request->input('country'); 
        $state=$request->input('state'); 
        $postcode=$request->input('postcode');
        $address=$request->input('address');


        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.
        if ($estado != null && $estado!='')
        {
            $pedido->estado = $estado;
            $bandera=true;
        }

        if ($metodo_pago != null && $metodo_pago!='')
        {
            $pedido->metodo_pago = $metodo_pago;
            $bandera=true;
        }

        if ($ref_pago != null && $ref_pago!='')
        {
            $pedido->ref_pago = $ref_pago;
            $bandera=true;
        }

        if ($subtotal != null && $subtotal!='')
        {
            $pedido->subtotal = $subtotal;
            $bandera=true;
        }

        if ($total != null && $total!='')
        {
            $pedido->total = $total;
            $bandera=true;
        }

        if ($country != null && $country!='')
        {
            $pedido->country = $country;
            $bandera=true;
        }

        if ($state != null && $state!='')
        {
            $pedido->state = $state;
            $bandera=true;
        }

        if ($postcode != null && $postcode!='')
        {
            $pedido->postcode = $postcode;
            $bandera=true;
        }

        if ($address != null && $address!='')
        {
            $pedido->address = $address;
            $bandera=true;
        }

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($pedido->save()) {
                return response()->json(['pedido'=>$pedido , 'message'=>'Pedido actualizado con éxito.'], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar el pedido.'], 500);
            }
            
        }
        else
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['error'=>'No se ha modificado ningún dato al pedido.'],409);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Comprobamos si el pedido que nos están pasando existe o no.
        $pedido=\App\Pedido::find($id);

        if (count($pedido)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el pedido con id '.$id], 404);
        } 
       
        //Eliminar las relaciones(productos) en la tabla pivote
        $pedido->productos()->detach();

        // Eliminamos el pedido.
        $pedido->delete();

        return response()->json(['message'=>'Se ha eliminado correctamente el pedido.'], 200);
    }

    public function misPedidos($usuario_id)
    {
        //cargar todos los pedidos
        $pedidos = \App\Pedido::
            where('usuario_id', $usuario_id)
            ->with(['usuario' => function ($query) {
                $query->select('id', 'email', 'nombre', 'direccion', 'telefono', 'imagen', 'activo');
            }])
            /*->with('productos')*/
            ->orderBy('id', 'desc')
            ->get();

        return response()->json(['pedidos'=>$pedidos], 200);
    }
}
