<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class CommentblogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        if ( !$request->input('blog_id') )
        {
            // Se devuelve un array error con los errors encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para messagees de validación.
            return response()->json(['error'=>'Falta el parametro blog_id.'],422);
        }

        // Comprobamos si el blog existe o no.
        $blog=\App\Blog::find($request->input('blog_id'));

        if (count($blog)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el blog con id '.$id], 404);
        }

        if($comment=\App\Commentblog::create($request->all())){

            $blog->count_comments = $blog->count_comments + 1;
            $blog->save(); 

           return response()->json(['message'=>'Comentario creado con éxito.',
             'comment'=>$comment], 200);
        }else{
            return response()->json(['error'=>'Error al crear el comentario.'], 500);
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Comprobamos si el msg existe o no.
        $msg=\App\Commentblog::find($id);

        if (count($msg)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el comentario con id '.$id], 404);
        }

        $blog=\App\Blog::find($msg->blog_id);
        if (count($blog)!=0)
        {
            $blog->count_comments = $blog->count_comments - 1;
            $blog->save(); 
        }
        

        // Eliminamos la msg si no tiene relaciones.
        $msg->delete();

        return response()->json(['message'=>'Se ha eliminado correctamente el comentario.'], 200);
    }
}
