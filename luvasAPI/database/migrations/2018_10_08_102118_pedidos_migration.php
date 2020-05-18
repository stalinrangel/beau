<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PedidosMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('estado'); //1=sin pagar 2=pagado 3=enviado 4=cancelado   
            $table->integer('metodo_pago')->nullable();//1=transferencia 2=paypal
            $table->string('ref_pago')->nullable();//referencia de la transferencia o pago de paypal
            $table->float('subtotal'); //suma del costo de los prods solicitados 
            $table->float('total'); //suma del costo de los prods solicitados
            $table->string('country')->nullable();
            $table->string('state')->nullable();
            $table->string('postcode')->nullable();
            $table->string('address')->nullable();

            $table->integer('usuario_id')->unsigned();
            $table->foreign('usuario_id')->references('id')->on('usuarios');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('pedidos');
    }
}
