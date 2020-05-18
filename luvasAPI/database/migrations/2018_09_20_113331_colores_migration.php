<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ColoresMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('colores', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre_color')->nullable();
            $table->string('codigo_color')->nullable();
            $table->integer('eliminado')->nullable();
            $table->text('imagen')->nullable();

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
        Schema::drop('colores');
    }
}
