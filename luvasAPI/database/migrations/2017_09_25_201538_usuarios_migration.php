<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UsuariosMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->increments('id');
            $table->string('email')->nullable();
            $table->string('password')->nullable();
            $table->string('nombre')->nullable();
            $table->integer('tipo_usuario')->nullable(); //1=admin 2=cliente
            $table->string('codigo_verificacion')->nullable();
            $table->string('token_notificacion')->nullable();
            $table->integer('tipo_registro')->nullable(); //1=normal 2=facebook 3=twitter
            $table->string('id_facebook')->nullable();
            $table->string('id_twitter')->nullable();

            $table->string('sexo')->nullable();
            $table->integer('edad')->nullable();
            $table->string('lat')->nullable();
            $table->string('lng')->nullable();
            $table->string('telefono')->nullable();
            $table->string('direccion')->nullable();
            $table->integer('activo')->nullable(); //1=SI 2=NO
            $table->string('imagen')->nullable();

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
        Schema::drop('usuarios');
    }
}
