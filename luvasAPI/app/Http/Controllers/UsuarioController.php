<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use DB;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexClientes()
    {
        //cargar todos los clientes
        $clientes = \App\User::where('tipo_usuario', 2)->get();

        return response()->json(['clientes'=>$clientes], 200);
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
        if ( !$request->input('email') )
        {
            // Se devuelve un array error con los errors encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para messagees de validación.
            return response()->json(['error'=>'Falta el parametro email.'],422);
        }
        if ( !$request->input('tipo_registro') )
        {
            // Se devuelve un array error con los errors encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para messagees de validación.
            return response()->json(['error'=>'Falta el parametro tipo_registro.'],422);
        }
        if ( !$request->input('tipo_usuario') )
        {
            // Se devuelve un array error con los errors encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para messagees de validación.
            return response()->json(['error'=>'Falta el parametro tipo_usuario.'],422);
        }

        $aux = \App\User::where('email', $request->input('email'))->get();
        if(count($aux)!=0){

            if ($request->input('tipo_registro') == 1) {
                //Devolvemos un código 409 Conflict. 
                return response()->json(['error'=>'Ya existe un usuario con esas credenciales.'], 409);
            }else{

                $auxUser = $aux[0];
                $auxUser->email = $request->input('email');
                //$auxUser->password = Hash::make($request->input('password'));
                $auxUser->nombre = $request->input('nombre');
                //$usuario->tipo_usuario = 1;
                $auxUser->tipo_registro = $request->input('tipo_registro');

                if ($request->input('tipo_registro') == 2) {
                    $auxUser->id_facebook = $request->input('id_facebook');
                }else if ($request->input('tipo_registro') == 3) {
                    $auxUser->id_twitter = $request->input('id_twitter');
                }

                if ($request->has('token_notificacion')) {
                    if ($request->input('token_notificacion') != 'null' && $request->input('token_notificacion') != null && $request->input('token_notificacion') != '') {

                        $auxUser->token_notificacion = $request->input('token_notificacion');
                    }
                }

                $auxUser->sexo = $request->input('sexo');
                $auxUser->edad = $request->input('edad');
                $auxUser->lat = $request->input('lat');
                $auxUser->lng = $request->input('lng');
                $auxUser->telefono = $request->input('telefono');
                $auxUser->direccion = $request->input('direccion');
                $auxUser->activo = $request->input('activo');
                $auxUser->imagen = $request->input('imagen');
                
                // Almacenamos en la base de datos el registro.
                if ($auxUser->save()) {

                    if (!$token = JWTAuth::fromUser($auxUser)) {
                        return response()->json(['error' => 'could_not_create_token'], 401);
                    }

                    $auxUser = JWTAuth::toUser($token);

                    return response()->json(['message'=>'Usuario actualizado con éxito.', 'usuario'=>$auxUser, 'token' => $token], 200);
                }else{
                    return response()->json(['error'=>'Error al actualizar el usuario.'], 500);
                }
                
                
            }
        }

        /*Primero creo una instancia en la tabla usuarios*/
        $usuario = new \App\User;
        $usuario->email = $request->input('email');

        if ($request->input('password') != null && $request->input('password') != '')
        {
            $usuario->password = Hash::make($request->input('password'));
        }
        
        $usuario->nombre = $request->input('nombre');
        $usuario->tipo_usuario = $request->input('tipo_usuario');
        $usuario->tipo_registro = $request->input('tipo_registro');
        $usuario->id_facebook = $request->input('id_facebook');
        $usuario->id_twitter = $request->input('id_twitter');

        if ($request->has('token_notificacion')) {
            if ($request->input('token_notificacion') != 'null' && $request->input('token_notificacion') != null && $request->input('token_notificacion') != '') {

                $usuario->token_notificacion = $request->input('token_notificacion');
            }
        }

        $usuario->sexo = $request->input('sexo');
        $usuario->edad = $request->input('edad');
        $usuario->lat = $request->input('lat');
        $usuario->lng = $request->input('lng');
        $usuario->telefono = $request->input('telefono');
        $usuario->direccion = $request->input('direccion');
        $usuario->activo = $request->input('activo');
        $usuario->imagen = $request->input('imagen');

        if($usuario->save()){

            if (!$token = JWTAuth::fromUser($usuario)) {
                return response()->json(['error' => 'could_not_create_token'], 401);
            }

            $usuario = JWTAuth::toUser($token);

           return response()->json(['message'=>'Usuario creado con éxito.', 'usuario'=>$usuario, 'token' => $token], 200);
        }else{
            return response()->json(['error'=>'Error al crear el usuario.'], 500);
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
        //cargar un usuario
        $usuario = \App\User::find($id);

        if(count($usuario)==0){
            return response()->json(['error'=>'No existe el usuario con id '.$id], 404);          
        }else{

            return response()->json(['usuario'=>$usuario], 200);
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
        // Comprobamos si el usuario que nos están pasando existe o no.
        $usuario = \App\User::find($id);

        if (count($usuario)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el usuario con id '.$id], 404);
        }      

        // Listado de campos recibidos teóricamente.
        //usuario
        $email=$request->input('email'); 
        $password=$request->input('password');  
        $nombre=$request->input('nombre');
        $codigo_verificacion=$request->input('codigo_verificacion');
        $token_notificacion=$request->input('token_notificacion');

        $sexo = $request->input('sexo');
        $edad = $request->input('edad');
        $lat = $request->input('lat');
        $lng=$request->input('lng');
        $telefono=$request->input('telefono');
        $direccion=$request->input('direccion');
        $activo=$request->input('activo');
        $imagen = $request->input('imagen');

        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.

        if ($email != null && $email!='')
        {
            $aux = \App\User::where('email', $request->input('email'))
            ->where('id', '<>', $usuario->id)->get();

            if(count($aux)!=0){
               // Devolvemos un código 409 Conflict. 
                return response()->json(['error'=>'Ya existe otro usuario con ese email.'], 409);
            }

            $usuario->email = $email;
            $bandera=true;
        }

        if ($password != null && $password!='')
        {
            $usuario->password = Hash::make($request->input('password'));
            $bandera=true;
        }

        if ($nombre != null && $nombre!='')
        {
            $usuario->nombre = $nombre;
            $bandera=true;
        }

        if ($codigo_verificacion != null && $codigo_verificacion!='')
        {
            $usuario->codigo_verificacion = $codigo_verificacion;
            $bandera=true;
        }

        if ($token_notificacion != null && $token_notificacion!='')
        {
            $usuario->token_notificacion = $token_notificacion;
            $bandera=true;
        }

        if ($sexo != null && $sexo!='')
        {
            $usuario->sexo = $sexo;
            $bandera=true;
        }

        if ($edad != null && $edad!='')
        {
            $usuario->edad = $edad;
            $bandera=true;
        }

        if ($lat != null && $lat!='')
        {
            $usuario->lat = $lat;
            $bandera=true;
        }

        if ($lng != null && $lng!='')
        {
            $usuario->lng = $lng;
            $bandera=true;
        }

        if ($telefono != null && $telefono!='')
        {
            $usuario->telefono = $telefono;
            $bandera=true;
        }

        if ($direccion != null && $direccion!='')
        {
            $usuario->direccion = $direccion;
            $bandera=true;
        }

        if ($activo != null && $activo!='')
        {
            $usuario->activo = $activo;
            $bandera=true;
        }

        if ($imagen != null && $imagen!='')
        {
            $usuario->imagen = $imagen;
            $bandera=true;
        }

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($usuario->save()) {
                return response()->json(['message'=>'Usuario actualizado con éxito.', 'usuario'=>$usuario], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar el usuario.'], 500);
            }
        }
        else
        {
            // Se devuelve un array error con los error encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['error'=>'No se ha modificado ningún dato del usuario.'],409);
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
        // Comprobamos si el usuario que nos están pasando existe o no.
        $usuario=\App\User::find($id);

        if (count($usuario)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el usuario con id '.$id], 404);
        }

        $pedidos = $usuario->pedidos;

        if (sizeof($pedidos) > 0)
        {
            for ($i=0; $i < count($pedidos); $i++) { 
                //Eliminar las relaciones(productos) en la tabla pivote
                $pedidos[$i]->productos()->detach();

                // Eliminamos el pedido.
                $pedidos[$i]->delete();
            }
        }

        // Eliminamos el usuario.
        $usuario->delete();

        return response()->json(['message'=>'Se ha eliminado correctamente el usuario.'], 200);
    }


    /*usuario_id id de la tabla usuarios*/
    public function setTokenNotificaion(Request $request, $usuario_id)
    {
        // Comprobamos si el usuario que nos están pasando existe o no.
        $usuario=\App\User::find($usuario_id);

        if (count($usuario)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe el usuario con id '.$usuario_id], 404);
        }

        $token_notificacion=$request->input('token_notificacion');

        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.
        if ($token_notificacion != null && $token_notificacion!='')
        {
            $usuario->token_notificacion = $token_notificacion;
            $bandera=true;
        }

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($usuario->save()) {
                return response()->json(['message'=>'Token de notificación actualizado con éxito.', 'usuario'=>$usuario], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar el usuario.'], 500);
            }
            
        }
        else
        {
            // Se devuelve un array error con los error encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['error'=>'No se ha modificado ningún dato del usuario.'],409);
        }
    }
}
