<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class BancoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //cargar todos los bancos
        $bancos = \App\Banco::all();

        return response()->json(['bancos'=>$bancos], 200);
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
        if($banco=\App\Banco::create($request->all())){
           return response()->json(['message'=>'Cuenta bancaria creada con éxito.',
             'banco'=>$banco], 200);
        }else{
            return response()->json(['error'=>'Error al crear la cuenta bancaria.'], 500);
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
        //cargar un banco
        $banco = \App\Banco::find($id);

        if(count($banco)==0){
            return response()->json(['error'=>'No existe la cuenta bancaria con id '.$id], 404);          
        }else{

            return response()->json(['banco'=>$banco], 200);
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
        // Comprobamos si el banco que nos están pasando existe o no.
        $banco=\App\Banco::find($id);

        if (count($banco)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe la cuenta bancaria con id '.$id], 404);
        }      

        $banco->fill($request->all());

        // Almacenamos en la base de datos el registro.
        if ($banco->save()) {
            return response()->json(['message'=>'Cuenta bancaria editada con éxito.',
                'banco'=>$banco], 200);
        }else{
            return response()->json(['error'=>'Error al actualizar la cuenta bancaria.'], 500);
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
        // Comprobamos si la cuenta bancaria que nos están pasando existe o no.
        $banco=\App\Banco::find($id);

        if (count($banco)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe la cuenta bancaria con id '.$id], 404);
        } 

        // Eliminamos.
        $banco->delete();

        return response()->json(['message'=>'Se ha eliminado correctamente la cuenta bancaria.'], 200);
    }
}
