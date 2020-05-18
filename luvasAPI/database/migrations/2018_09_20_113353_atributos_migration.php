<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AtributosMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('atributos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('atributo')->nullable();
            $table->float('precio')->nullable();
            $table->integer('cantidad')->nullable();
            $table->integer('eliminado')->nullable();

            $table->integer('color_id')->unsigned();
            $table->foreign('color_id')->references('id')->on('colores');

            $table->integer('producto_id')->unsigned();
            $table->foreign('producto_id')->references('id')->on('productos');

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
        Schema::drop('atributos');
    }
}
