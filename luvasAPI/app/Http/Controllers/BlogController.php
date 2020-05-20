<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //cargar todos los blogs
        $blogs = \App\Blog::orderBy('id', 'desc')->get();

        return response()->json(['blogs'=>$blogs], 200);
        
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
        if ( !$request->input('titulo') )
        {
            // Se devuelve un array error con los errors encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para messagees de validación.
            return response()->json(['error'=>'Falta el parametro titulo.'],422);
        }
        /*if ( !$request->input('creador_id') )
        {
            // Se devuelve un array error con los errors encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para messagees de validación.
            return response()->json(['error'=>'Falta el parametro creador_id.'],422);
        }*/

        // Comprobamos si el blog que nos están pasando existe o no.
        $blogAux=\App\Blog::where('titulo',$request->input('titulo'))->get();
        if (count($blogAux)!=0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'Ya existe un blog con el titulo '.$request->input('titulo')], 409);
        }

        /*$usuario = \App\User::find($request->input('creador_id'));
        if(count($usuario)==0){
            return response()->json(['error'=>'No existe el usuario con id '.$request->input('creador_id')], 404);          
        }*/

        if($blog=\App\Blog::create([
            'titulo' => $request->input('titulo'),
            'creador' => $request->input('creador'),
            'count_comments' => 0,
            'imagen' => $request->input('imagen'),
            'contenido' => $request->input('contenido'),
        ])){

           return response()->json(['message'=>'Blog creado con éxito.',
             'blog'=>$blog], 200);
        }else{
            return response()->json(['error'=>'Error al crear el blog.'], 500);
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
        //cargar un blog
        $blog = \App\Blog::
            //with('comments')
            find($id);

        if(count($blog)==0){
            return response()->json(['error'=>'No existe el blog con id '.$id], 404);          
        }else{

            return response()->json(['blog'=>$blog], 200);
        }
    }

    /*Carga el blog con sus comentarios*/
    public function detalle($id)
    {
        //cargar un blog
        $blog = \App\Blog::
            with(['comments' => function ($query) {
                $query->orderBy('id', 'desc');
            }])
            ->find($id);

        if(count($blog)==0){
            return response()->json(['error'=>'No existe el blog con id '.$id], 404);          
        }else{

            return response()->json(['blog'=>$blog], 200);
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
        // Comprobamos si el blog que nos están pasando existe o no.
        $blog=\App\Blog::find($id);

        if (count($blog)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el blog con id '.$id], 404);
        }      

        // Listado de campos recibidos teóricamente.
        $titulo=$request->input('titulo');
        $creador=$request->input('creador');
        $count_comments=$request->input('count_comments');
        $imagen=$request->input('imagen');
        $contenido=$request->input('contenido');

        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.
        if ($titulo != null && $titulo!='')
        {
            $blog->titulo = $titulo;
            $bandera=true;
        }

        if ($creador != null && $creador!='')
        {
            $blog->creador = $creador;
            $bandera=true;
        }

        if ($count_comments != null && $count_comments!='')
        {
            $blog->count_comments = $count_comments;
            $bandera=true;
        }

        if ($imagen != null && $imagen!='')
        {
            $blog->imagen = $imagen;
            $bandera=true;
        }

        if ($contenido != null && $contenido!='')
        {
            $blog->contenido = $contenido;
            $bandera=true;
        }

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($blog->save()) {
                return response()->json(['message'=>'Blog editado con éxito.',
                    'blog'=>$blog], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar el blog.'], 500);
            }
            
        }
        else
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['error'=>'No se ha modificado ningún dato al blog.'],409);
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
        // Comprobamos si el blog existe o no.
        $blog=\App\Blog::find($id);

        if (count($blog)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el blog con id '.$id], 404);
        }
       
        //Eliminamos los comentarios del blog       
        DB::table('comentariosblogs')
                ->where('blog_id', $id)
                ->delete();

        // Eliminamos el blog.
        $blog->delete();

        return response()->json(['message'=>'Se ha eliminado correctamente el blog.'], 200);
    }

    /*Retorna los ultimos 3 blogs creados*/
    public function blogsHome()
    {
        //cargar los blogs
        $blogs = \App\Blog::orderBy('id', 'desc')->take(3)->get();

        return response()->json(['blogs'=>$blogs], 200);
        
    }
}
