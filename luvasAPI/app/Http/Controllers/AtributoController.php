<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;

class AtributoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //cargar todos los atributos
        $atributos = \App\Atributo::where('eliminado', 0)
            ->with('producto')->with('color')->get();

        return response()->json(['atributos'=>$atributos], 200);
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
        if ( !$request->input('color_id'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['error'=>'Falta el parámetro color_id.'],422);
        } 

        if ( !$request->input('producto_id'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['error'=>'Falta el parámetro producto_id.'],422);
        }

        // Comprobamos si el color que nos están pasando existe o no.
        $color = \App\Color::find($request->input('color_id'));

        if(count($color)==0){
            return response()->json(['error'=>'No existe el color con id '.$request->input('color_id')], 404);          
        }

        // Comprobamos si el producto que nos están pasando existe o no.
        $producto = \App\Producto::find($request->input('producto_id'));

        if(count($producto)==0){
            return response()->json(['error'=>'No existe el producto con id '.$request->input('producto_id')], 404);          
        } 

        if($nuevoAtributo=\App\Atributo::create([
            'atributo' => $request->input('atributo'),
            'eliminado' => 0,
            'precio' => $request->input('precio'),
            'cantidad' => $request->input('cantidad'),
            'color_id' => $request->input('color_id'),
            'producto_id' => $request->input('producto_id')
        ])){
           return response()->json(['message'=>'Atributo creado con éxito.',
             'atributo'=>$nuevoAtributo], 200);
        }else{
            return response()->json(['error'=>'Error al crear el atributo.'], 500);
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
        //cargar un atributo
        $atributo = \App\Atributo::where('eliminado', 0)
            ->with('color')
            ->with('producto')
            ->find($id);

        if(count($atributo)==0){
            return response()->json(['error'=>'No existe el atributo con id '.$id], 404);          
        }else{
            return response()->json(['atributo'=>$atributo], 200);
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
        // Comprobamos si el atributo que nos están pasando existe o no.
        $atributo=\App\Atributo::find($id);

        if (count($atributo)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el atributo con id '.$id], 404);
        }      

        // Listado de campos recibidos teóricamente.
        $atrib=$request->input('atributo');
        $precio=$request->input('precio');
        $cantidad=$request->input('cantidad');

        /*return response()->json(['message'=>'Atributo editado con éxito.',
                    'atributo'=>$cantidad], 200);*/

        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.
        if ($atrib != null && $atrib!='')
        {
            $atributo->atributo = $atrib;
            $bandera=true;
        }

        if ($precio != null && $precio!='')
        {
            $atributo->precio = $precio;
            $bandera=true;
        }

        /*if ($cantidad != null && $cantidad!='')
        {
            $atributo->cantidad = $cantidad;
            $bandera=true;
        }*/

        $atributo->cantidad = $cantidad;

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($atributo->save()) {
                return response()->json(['message'=>'Atributo editado con éxito.',
                    'atributo'=>$atributo], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar el atributo.'], 500);
            }
            
        }
        else
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['error'=>'No se ha modificado ningún dato al atributo.'],409);
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
        // Comprobamos si el atributo existe o no.
        $atributo=\App\Atributo::find($id);

        if (count($atributo)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el atributo con id '.$id], 404);
        }

        // Eliminamos el atributo
        $atributo->eliminado = 1;
        $atributo->save();

        return response()->json(['message'=>'Se ha eliminado correctamente el atributo.'], 200);
    }
}
