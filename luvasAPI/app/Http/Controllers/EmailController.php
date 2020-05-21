<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Mail;
use Session;
use Redirect;
use Hash;

class EmailController extends Controller
{

    /*Envio de Email de la seccion Contac*/
    public function contacClientes(Request $request)
    {

        /*Cuenta de destino del email*/
        $correo = 'e.stalinrangel@gmail.com';

        $data = array( 'name' => $request->input('name'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
            'msg' => $request->input('msg'));

        //Enviamos el correo con el codigo aleatorio
        Mail::send('emails.contact', $data, function($msj) use ($correo){
            $msj->subject('Contacto Beau');
            $msj->to($correo);
        });

        //Informar al cliente despues de enviar el correo
        return response()->json(['message'=>'Email enviado.'], 200);
    }

}
