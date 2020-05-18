<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //cargar todos los productos
        $productos = \App\Producto::where('eliminado', 0)
            ->with('categoria')->get();

        return response()->json(['productos'=>$productos], 200);
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
        // Primero comprobaremos si estamos recibiendo todos los campos.
        if ( !$request->input('nombre'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['error'=>'Falta el parámetro nombre.'],422);
        } 

        if ( !$request->input('categoria_id'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['error'=>'Falta el parámetro categoria_id.'],422);
        }

        // Comprobamos si la categoria que nos están pasando existe o no.
        $categoria = \App\Categoria::find($request->input('categoria_id'));

        if(count($categoria)==0){
            return response()->json(['error'=>'No existe la categoría con id '.$request->input('categoria_id')], 404);          
        } 

        if($nuevoProducto=\App\Producto::create([
            'nombre' => $request->input('nombre'),
            'estado' => 'ON',
            'eliminado' => 0,
            'count_vistas' => 0,
            'count_ventas' => 0,
            'descripcion' => $request->input('descripcion'),
            'categoria_id' => $request->input('categoria_id')
        ])){

            //Cargar la categoria antes de enviar el producto creado
            $nuevoProducto->categoria = $nuevoProducto->categoria;

           return response()->json(['message'=>'Producto creado con éxito.',
             'producto'=>$nuevoProducto], 200);
        }else{
            return response()->json(['error'=>'Error al crear el producto.'], 500);
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
        //cargar un producto
        $producto = \App\Producto::where('eliminado', 0)
            ->with('categoria')
            ->with(['colores' => function ($query) {
                $query->where('eliminado', 0)
                    ->with(['atributos' => function ($query) {
                        $query->where('eliminado', 0);
                    }]);
            }])
            ->find($id);

        if(count($producto)==0){
            return response()->json(['error'=>'No existe el producto con id '.$id], 404);          
        }else{
            return response()->json(['producto'=>$producto], 200);
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
        // Comprobamos si el producto que nos están pasando existe o no.
        $producto=\App\Producto::find($id);

        if (count($producto)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el producto con id '.$id], 404);
        }      

        // Listado de campos recibidos teóricamente.
        $nombre=$request->input('nombre');
        $descripcion=$request->input('descripcion');
        $categoria_id=$request->input('categoria_id');
        $estado=$request->input('estado');

        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.
        if ($nombre != null && $nombre!='')
        {
            $producto->nombre = $nombre;
            $bandera=true;
        }

        if ($descripcion != null && $descripcion!='')
        {
            $producto->descripcion = $descripcion;
            $bandera=true;
        }

        if ($categoria_id != null && $categoria_id!='')
        {
            // Comprobamos si la categoria que nos están pasando existe o no.
            $categoria = \App\Categoria::find($categoria_id);

            if(count($categoria)==0){
                return response()->json(['error'=>'No existe la categoría con id '.$categoria_id], 404);          
            } 

            $producto->categoria_id = $categoria_id;
            $bandera=true;
        }

        if ($estado != null && $estado!='')
        {
            $producto->estado = $estado;
            $bandera=true;
        }

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($producto->save()) {
                return response()->json(['message'=>'Producto editado con éxito.',
                    'producto'=>$producto], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar el producto.'], 500);
            }
            
        }
        else
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['error'=>'No se ha modificado ningún dato al producto.'],409);
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
        // Comprobamos si el producto existe o no.
        $producto=\App\Producto::find($id);

        if (count($producto)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el producto con id '.$id], 404);
        }


        DB::table('colores')
            ->where('producto_id', $producto->id)
            ->update(['eliminado' => 1]);

        DB::table('atributos')
            ->where('producto_id', $producto->id)
            ->update(['eliminado' => 1]);
        

        // Eliminamos el producto
        $producto->eliminado = 1;
        $producto->save();

        return response()->json(['message'=>'Se ha eliminado correctamente el producto.'], 200);
    }

    public function prodDisponibles()
    {
        //cargar todos los productos en ON
        $prods = \App\Producto::where('eliminado', 0)
            ->where('estado', 'ON')
            ->with('categoria')
            /*->with('colores')*/
            ->get();

        $productos = [];

        
        for ($i=0; $i < count($prods) ; $i++) { 

            //Cargar el primer color
            $color = $prods[$i]
                ->colores()
                ->where('eliminado', 0)
                ->take(1)
                ->first();

            if ($color) {
                $atributos = $color->atributos()->where('eliminado', 0)->get();
                if ($atributos) {
                    if (count($atributos)!=0) {
                        $color->atributos = $atributos;
                        $color->imagen = json_decode($color->imagen);
                        $prods[$i]->color = $color;
                        $prods[$i]->mostrar = 1;
                        array_push($productos, $prods[$i]);  
                    }
                }
                
            }
        }

        return response()->json(['productos'=>$productos], 200);
    }

    /*Detalle para el cliente*/
    public function detalle($id)
    {
        //cargar un producto
        $producto = \App\Producto::where('eliminado', 0)
            ->with('categoria')
            //->with('colores.atributos')
            ->with(['colores' => function ($query) {
                $query->where('eliminado', 0)
                    ->with(['atributos' => function ($query) {
                        $query->where('eliminado', 0);
                    }]);
            }])
            ->find($id);

        if(count($producto)==0){
            return response()->json(['error'=>'No existe el producto con id '.$id], 404);          
        }else{

            for ($i=0; $i < count($producto->colores); $i++) { 
                $producto->colores[$i]->imagen = json_decode($producto->colores[$i]->imagen);
            }
            return response()->json(['producto'=>$producto], 200);
        }
    }

    /*Verificar la existencia de todos los
    productos, colores y tallas(atributos)
    del pedido*/
    public function verificarPedido(Request $request)
    {
        // Primero comprobaremos si estamos recibiendo todos los campos obligatorios.
        if (!$request->input('cart'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['error'=>'Falta el parametro cart.'],422);
        }

        $cart = json_decode($request->input('cart'));

        $productos = [];

        for ($i=0; $i < count($cart) ; $i++) { 

            $color_id = $cart[$i]->colores[0]->id;
            $atributo_id = $cart[$i]->colores[0]->atributos[0]->id;

            $prod = \App\Producto::where('eliminado', 0)
            ->where('estado', 'ON')
            ->with('categoria')
            ->with(['colores' => function ($query) use ($color_id, $atributo_id) {
                $query->where('id', $color_id)
                    ->where('eliminado', 0)
                    ->with(['atributos' => function ($query) use ($atributo_id) {
                        $query->where('id', $atributo_id)
                            ->where('eliminado', 0);
                    }]);
            }])
            ->find($cart[$i]->id);


            if(count($prod) != 0){
                if (count($prod->colores) != 0) {
                    if (count($prod->colores[0]->atributos) != 0) {
                        if ($prod->colores[0]->atributos[0]->cantidad > 0) {
                            $prod->colores[0]->imagen = json_decode($prod->colores[0]->imagen);
                            array_push($productos, $prod);  
                        }
                    }
                }
               
            }   
        }    

        
        return response()->json(['productos'=>$productos], 200);
        
    }

    public function aumentarVistas($id)
    {
        //cargar un producto
        $producto = \App\Producto::find($id);
        if(count($producto)!=0){
           $producto->count_vistas = $producto->count_vistas + 1;
           $producto->save();         
        }
    }

    public function productosPopulares()
    {

        //cargar los 10 productos mas vistos
        $prodsA = \App\Producto::where('eliminado', 0)
            ->where('estado', 'ON')
            ->with('categoria')
            ->orderBy('count_vistas', 'desc')
            ->take(10)
            ->get();

        $masVistos = [];
        
        for ($i=0; $i < count($prodsA) ; $i++) {

                //Cargar el primer color
                $color = $prodsA[$i]
                    ->colores()
                    ->where('eliminado', 0)
                    ->take(1)->first();

                if ($color) {
                    $atributos = $color->atributos()->where('eliminado', 0)->get();
                    if ($atributos) {
                        if (count($atributos)!=0 && count($masVistos)<8) {
                            $color->atributos = $atributos;
                            $color->imagen = json_decode($color->imagen);
                            $prodsA[$i]->color = $color;
                            $prodsA[$i]->mostrar = 1;
                            array_push($masVistos, $prodsA[$i]);  
                        }
                    }
                    
                }
            
        }

        //cargar los 10 productos mas vendidos
        $prodsB = \App\Producto::where('eliminado', 0)
            ->where('estado', 'ON')
            ->with('categoria')
            ->orderBy('count_ventas', 'desc')
            ->take(10)
            ->get();

        $masVendidos = [];
        
        for ($i=0; $i < count($prodsB) ; $i++) {

                //Cargar el primer color
                $color = $prodsB[$i]
                    ->colores()
                    ->where('eliminado', 0)
                    ->take(1)->first();

                if ($color) {
                    $atributos = $color->atributos()->where('eliminado', 0)->get();
                    if ($atributos) {
                        if (count($atributos)!=0 && count($masVendidos)<8) {
                            $color->atributos = $atributos;
                            $color->imagen = json_decode($color->imagen);
                            $prodsB[$i]->color = $color;
                            $prodsB[$i]->mostrar = 1;
                            array_push($masVendidos, $prodsB[$i]);  
                        }
                    }
                    
                }
            
        }

        return response()->json(['masVistos'=>$masVistos, 'masVendidos'=>$masVendidos], 200);

       
    }

    /*Retorna los productos relacionados
    con una categoria, menos el producto
    que dispara la busqueda*/
    public function productosRelacionados(Request $request)
    {

        //cargar los 10 productos mas vistos
        $prodsA = \App\Producto::where('eliminado', 0)
            ->where('estado', 'ON')
            ->where('categoria_id', $request->input('categoria_id'))
            ->where('id', '<>', $request->input('producto_id'))
            ->with('categoria')
            ->orderBy('count_vistas', 'desc')
            ->take(10)
            ->get();

        $masVistos = [];
        
        for ($i=0; $i < count($prodsA) ; $i++) {

                //Cargar el primer color
                $color = $prodsA[$i]
                    ->colores()
                    ->where('eliminado', 0)
                    ->take(1)->first();

                if ($color) {
                    $atributos = $color->atributos()->where('eliminado', 0)->get();
                    if ($atributos) {
                        if (count($atributos)!=0 && count($masVistos)<4) {
                            $color->atributos = $atributos;
                            $color->imagen = json_decode($color->imagen);
                            $prodsA[$i]->color = $color;
                            $prodsA[$i]->mostrar = 1;
                            array_push($masVistos, $prodsA[$i]);  
                        }
                    }
                    
                }
            
        }

        return response()->json(['masVistos'=>$masVistos], 200);
 
    }

    public function productosMasVendidos()
    {

        //cargar los 10 productos mas vendidos
        $prodsB = \App\Producto::where('eliminado', 0)
            ->where('estado', 'ON')
            ->with('categoria')
            ->orderBy('count_ventas', 'desc')
            ->take(10)
            ->get();

        $masVendidos = [];
        
        for ($i=0; $i < count($prodsB) ; $i++) {

                //Cargar el primer color
                $color = $prodsB[$i]
                    ->colores()
                    ->where('eliminado', 0)
                    ->take(1)->first();

                if ($color) {
                    $atributos = $color->atributos()->where('eliminado', 0)->get();
                    if ($atributos) {
                        if (count($atributos)!=0 && count($masVendidos)<6) {
                            $color->atributos = $atributos;
                            $color->imagen = json_decode($color->imagen);
                            $prodsB[$i]->color = $color;
                            $prodsB[$i]->mostrar = 1;
                            array_push($masVendidos, $prodsB[$i]);  
                        }
                    }
                    
                }
            
        }

        return response()->json(['masVendidos'=>$masVendidos], 200);

    }

}
