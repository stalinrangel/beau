<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;

class ColorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //cargar todos los colores
        $colores = \App\Color::where('eliminado', 0)
            ->with('producto')->get();

        return response()->json(['colores'=>$colores], 200);
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
        if ( !$request->input('nombre_color'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['error'=>'Falta el parámetro nombre_color.'],422);
        } 

        if ( !$request->input('producto_id'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['error'=>'Falta el parámetro producto_id.'],422);
        }

        // Comprobamos si el producto que nos están pasando existe o no.
        $producto = \App\Producto::find($request->input('producto_id'));

        if(count($producto)==0){
            return response()->json(['error'=>'No existe el producto con id '.$request->input('producto_id')], 404);          
        } 

        if($nuevoColor=\App\Color::create([
            'nombre_color' => $request->input('nombre_color'),
            'codigo_color' => $request->input('codigo_color'),
            'eliminado' => 0,
            'imagen' => $request->input('imagen'),
            'producto_id' => $request->input('producto_id')
        ])){
           return response()->json(['message'=>'Color creado con éxito.',
             'color'=>$nuevoColor], 200);
        }else{
            return response()->json(['error'=>'Error al crear el color.'], 500);
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
        //cargar un color
        $color = \App\Color::where('eliminado', 0)
            ->with('producto')
            //->with('atributos')
            ->with(['atributos' => function ($query){
                $query->where('eliminado', 0);
            }])
            ->find($id);

        if(count($color)==0){
            return response()->json(['error'=>'No existe el color con id '.$id], 404);          
        }else{
            return response()->json(['color'=>$color], 200);
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
        // Comprobamos si el color que nos están pasando existe o no.
        $color=\App\Color::find($id);

        if (count($color)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el color con id '.$id], 404);
        }      

        // Listado de campos recibidos teóricamente.
        $nombre_color=$request->input('nombre_color');
        $codigo_color=$request->input('codigo_color');
        $imagen=$request->input('imagen');

        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.
        if ($nombre_color != null && $nombre_color!='')
        {
            $color->nombre_color = $nombre_color;
            $bandera=true;
        }

        if ($codigo_color != null && $codigo_color!='')
        {
            $color->codigo_color = $codigo_color;
            $bandera=true;
        }

        if ($imagen != null && $imagen!='')
        {
            $color->imagen = $imagen;
            $bandera=true;
        }

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($color->save()) {
                return response()->json(['message'=>'Color editado con éxito.',
                    'color'=>$color], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar el color.'], 500);
            }
            
        }
        else
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['error'=>'No se ha modificado ningún dato al color.'],409);
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
        // Comprobamos si el color existe o no.
        $color=\App\Color::find($id);

        if (count($color)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el color con id '.$id], 404);
        }

        DB::table('atributos')
            ->where('color_id', $color->id)
            ->update(['eliminado' => 1]);
        

        // Eliminamos el color
        $color->eliminado = 1;
        $color->save();

        return response()->json(['message'=>'Se ha eliminado correctamente el color.'], 200);
    }

    /*Retorna los colores de un producto_id*/
    public function getColores($producto_id)
    {
        //cargar los colores de un producto_id
        $colores = \App\Color::where('eliminado', 0)
            ->where('producto_id',$producto_id)
            //->with('atributos')
            ->with(['atributos' => function ($query){
                $query->where('eliminado', 0);
            }])
            ->get();

        return response()->json(['colores'=>$colores], 200);
    }
}
