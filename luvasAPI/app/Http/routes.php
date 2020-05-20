<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

if(version_compare(PHP_VERSION, '7.2.0', '>=')) {
    error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
}


Route::get('/', function () {
    //return view('welcome');
    
});

Route::group(  ['middleware' =>'cors'], function(){


    //----Pruebas LoginController
    Route::post('/login/web','LoginController@loginWeb');
    Route::post('/login/app','LoginController@loginApp');
    //Route::post('/validar/token','LoginController@validarToken');


    //----Pruebas PasswordController
    Route::get('/password/usuario/{correo}','PasswordController@generarCodigo');
    Route::get('/password/codigo/{codigo}','PasswordController@validarCodigo');

    //----Pruebas EmailController
    Route::post('/emails/contact','EmailController@contacClientes');

        Route::put('/password/update/{usuario_id}','PasswordController@updatePassword'); 

        //----Pruebas UploadImagenController
        Route::post('/imagenes','UploadImagenController@store');

        //----Pruebas UsuarioController
        Route::get('/usuarios/clientes','UsuarioController@indexClientes');
        Route::post('/usuarios','UsuarioController@store');
        Route::put('/usuarios/{id}','UsuarioController@update');
        Route::delete('/usuarios/{id}','UsuarioController@destroy');
        Route::get('/usuarios/{id}','UsuarioController@show');
        Route::put('/usuarios/tokennotificacion/{usuario_id}','UsuarioController@setTokenNotificaion');

        //----Pruebas CategoriaController
        Route::get('/categorias','CategoriaController@index');
        Route::get('/categorias/habilitadas','CategoriaController@categoriasHabilitadas');
        Route::get('/categorias/home/cliente','CategoriaController@categoriasHomeCliente');
        Route::get('/categorias/footer/cliente','CategoriaController@categoriasFooter');
        Route::get('/categorias/our/products','CategoriaController@catOurProducts');
        Route::post('/categorias','CategoriaController@store');
        Route::put('/categorias/{id}','CategoriaController@update');
        Route::delete('/categorias/{id}','CategoriaController@destroy');
        Route::get('/categorias/{id}','CategoriaController@show');
        Route::get('/categorias/{id}/productos','CategoriaController@catProductos'); 
               
        //----Pruebas ProductoController
        Route::get('/productos','ProductoController@index');
        Route::get('/productos/mas/populares','ProductoController@productosPopulares');
        Route::get('/productos/mas/vendidos','ProductoController@productosMasVendidos');
        Route::get('/productos/filter/categoria/relacionados','ProductoController@productosRelacionados');
        Route::post('/productos','ProductoController@store');
        Route::put('/productos/{id}','ProductoController@update');
        Route::delete('/productos/{id}','ProductoController@destroy');
        Route::get('/productos/{id}','ProductoController@show');
        Route::get('/productos/filter/disponibles','ProductoController@prodDisponibles');
        Route::get('/productos/{id}/detalle/cliente','ProductoController@detalle');
        Route::post('/productos/verificar/pedido','ProductoController@verificarPedido');
        Route::put('/productos/visitar/{id}','ProductoController@aumentarVistas');

        //----Pruebas ColorController
        Route::get('/colores','ColorController@index');
        Route::post('/colores','ColorController@store');
        Route::put('/colores/{id}','ColorController@update');
        Route::delete('/colores/{id}','ColorController@destroy');
        Route::get('/colores/{id}','ColorController@show');
        Route::get('/colores/producto/{producto_id}','ColorController@getColores');

        //----Pruebas AtributoController
        Route::get('/atributos','AtributoController@index');
        Route::post('/atributos','AtributoController@store');
        Route::put('/atributos/{id}','AtributoController@update');
        Route::delete('/atributos/{id}','AtributoController@destroy');
        Route::get('/atributos/{id}','AtributoController@show');

        //----Pruebas PedidoController
        Route::get('/pedidos','PedidoController@index');
        Route::post('/pedidos','PedidoController@store');
        Route::put('/pedidos/{id}','PedidoController@update');
        Route::delete('/pedidos/{id}','PedidoController@destroy');
        Route::get('/pedidos/{id}','PedidoController@show');
        Route::get('/pedidos/usuario/{usuario_id}','PedidoController@misPedidos');

        //----Pruebas BancoController
        Route::get('/bancos','BancoController@index');
        Route::post('/bancos','BancoController@store');
        Route::put('/bancos/{id}','BancoController@update');
        Route::delete('/bancos/{id}','BancoController@destroy');
        Route::get('/bancos/{id}','BancoController@show');

        //----Pruebas BlogController
        Route::get('/blogs','BlogController@index');
        Route::get('/blogs/home/cliente','BlogController@blogsHome');
        Route::post('/blogs','BlogController@store');
        Route::put('/blogs/{id}','BlogController@update');
        Route::delete('/blogs/{id}','BlogController@destroy');
        Route::get('/blogs/{id}','BlogController@show');
        Route::get('/blogs/detalle/{id}','BlogController@detalle');

        //----Pruebas BlogController
        //Route::get('/comments/blogs','CommentblogController@index');
        Route::post('/comments/blogs','CommentblogController@store');
        //Route::put('/comments/blogs/{id}','CommentblogController@update');
        Route::delete('/comments/blogs/{id}','CommentblogController@destroy');
        //Route::get('/comments/blogs/{id}','CommentblogController@show');

        //----Pruebas DashboardController
        Route::get('/dashboard','DashboardController@index');


    Route::group(['middleware' => 'jwt-auth'], function(){



        

 

    });
});
