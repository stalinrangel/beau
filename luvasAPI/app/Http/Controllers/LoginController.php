<?php

namespace App\Http\Controllers;

use Hash;
use App\Http\Requests;
use App\User;
use App\Empresa;
use App\Empleado;
use App\Usuario;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use DB;

//use JWTAuth;
use Exception;

class LoginController extends Controller
{

    public function prueba(Request $request)
    {

        //$envFile = app()->environmentFilePath();
        
        $app = app_path();
        $precadena=substr($app,0,strlen($app)-3);
        $envFile=$precadena.'.env';

        $str = file_get_contents($envFile);
        $oldValue = env('MAIL_DRIVER');

        $str = str_replace("MAIL_DRIVER={$oldValue}", "MAIL_DRIVER=22", $str);

        $fp = fopen($envFile, 'w');
        fwrite($fp, $str);
        fclose($fp);
        return env('MAIL_DRIVER');
    }

    /*Funcion para verificar la valides de un token que se pasa en el request*/
    public function validarToken(Request $request)
    {

        try {
            $user = JWTAuth::toUser($request->input('token'));
        } catch (Exception $e) {
            /*if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException){
                return 0;
            }else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
                return 0;
            }else if ($e instanceof \Tymon\JWTAuth\Exceptions\JWTException){
                return 0;
            }else{
                return 0;
            }*/

            return 0;
        }

        return 1;
    }
    

    public function loginWeb(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $token = null;
        $user = null;

        try {

            $user = User::where('email', $request->input('email'))->first();
            if (empty($user)) {
                return response()->json(['error' => 'Email inválido.'], 401);
            }

            //En el panel solo se logean admins y clientes
            if ($user->tipo_usuario != 1 && $user->tipo_usuario != 2) {
                return response()->json(['error' => 'Credenciales inválidas.'], 401);
            }

            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'Password inválido.'], 401);
            }

            if ($request->input('token_notificacion') != '' && $request->input('token_notificacion') != null && $request->input('token_notificacion') != 'null') {
                if ($request->input('token_notificacion') != $user->token_notificacion) {
                    $user->token_notificacion = $request->input('token_notificacion');
                    $user->save();
                } 
            }

            $user = JWTAuth::toUser($token);
            

        } catch (JWTException $ex) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        //return response()->json(compact('token', 'user'));

        return response()
            ->json([
                'token' => $token,
                'user' => $user
            ]);
    }

    public function loginApp(Request $request)
    {    
        $credentials = $request->only('email', 'password');
        $token = null;
        $user = null;
        $bandera = false;

        try {

            if ($request->input('email') && $request->input('password')) {

                $credentials = $request->only('email', 'password');

                $user = User::where('email', $request->input('email'))->first();
                if (empty($user)) {
                    return response()->json(['error' => 'Email inválido.'], 401);
                }
                
                if ($request->input('password') == null || $request->input('password') == '' || $request->input('password') == 'null') {
                    return response()->json(['error' => 'Password inválido!'], 401);
                }

                if (!$token = JWTAuth::attempt($credentials)) {
                    return response()->json(['error' => 'Password inválido.'], 401);
                }

                $token = JWTAuth::fromUser($user);
                $bandera=true;
                
                if ($user->id_facebook == null && $request->input('id_facebook') != null && $request->input('id_facebook') != '') {

                    $user->id_facebook = $request->input('id_facebook');
                    $user->save();
                }
                if ($user->id_twitter == null && $request->input('id_twitter') != null && $request->input('id_twitter') != '') {

                    $user->id_twitter = $request->input('id_twitter');
                    $user->save();
                }


            }else if(!$bandera && $request->input('email') && !$request->input('password')){

                $user = User::where('email', $request->input('email'))->first();
                if (empty($user)) {
                    return response()->json(['error' => 'Usuario no encontrado.'], 401);
                }

                if ($user->tipo_registro == 1) {
                    return response()->json(['error' => 'Credenciales inválidas.'], 401);
                }

                $token = JWTAuth::fromUser($user);
                $bandera=true;
                
                if ($user->id_facebook == null && $request->input('id_facebook') != null && $request->input('id_facebook') != '') {

                    $user->id_facebook = $request->input('id_facebook');
                    $user->save();
                }
                if ($user->id_twitter == null && $request->input('id_twitter') != null && $request->input('id_twitter') != '') {

                    $user->id_twitter = $request->input('id_twitter');
                    $user->save();
                }

            }else if(!$bandera && $request->input('id_facebook')){

                $user = User::where('id_facebook', $request->input('id_facebook'))->first();
                if (empty($user)) {
                    return response()->json(['error' => 'Usuario no encontrado.'], 401);
                }

                if ($user->tipo_registro == 1) {
                    return response()->json(['error' => 'Credenciales inválidas.'], 401);
                }

                $token = JWTAuth::fromUser($user);
                $bandera=true;

            }else if(!$bandera && $request->input('id_twitter')){

                $user = User::where('id_twitter', $request->input('id_twitter'))->first();
                if (empty($user)) {
                    return response()->json(['error' => 'Usuario no encontrado.'], 401);
                }

                if ($user->tipo_registro == 1) {
                    return response()->json(['error' => 'Credenciales inválidas.'], 401);
                }

                $token = JWTAuth::fromUser($user);
                $bandera=true;

            }

            if ($request->input('token_notificacion') != '' && $request->input('token_notificacion') != null && $request->input('token_notificacion') != 'null') {
                if ($request->input('token_notificacion') != $user->token_notificacion) {
                    $user->token_notificacion = $request->input('token_notificacion');
                    $user->save();
                } 
            }
             
            $user = JWTAuth::toUser($token);
            

        } catch (JWTException $ex) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        //return response()->json(compact('token', 'user'));

        return response()
            ->json([
                'token' => $token,
                'user' => $user
            ]);
    }

}
