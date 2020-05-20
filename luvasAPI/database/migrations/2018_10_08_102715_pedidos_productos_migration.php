<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PedidosProductosMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedido_productos', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('pedido_id')->unsigned();
            $table->foreign('pedido_id')->references('id')->on('pedidos');

            $table->integer('producto_id')->unsigned();
            $table->foreign('producto_id')->references('id')->on('productos');

            $table->integer('color_id')->unsigned();
            $table->foreign('color_id')->references('id')->on('colores');

            $table->integer('atributo_id')->unsigned();
            $table->foreign('atributo_id')->references('id')->on('atributos');

            $table->integer('cantidad');//cantidad de prods solicitados
            $table->float('precio_unitario');//precio de la unidad de producto
            $table->float('subtotal');// cantidad * precio_initario

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
        Schema::drop('pedido_productos');
    }
}
