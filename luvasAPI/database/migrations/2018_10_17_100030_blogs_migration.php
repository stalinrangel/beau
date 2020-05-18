<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class BlogsMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('titulo')->nullable();
            $table->string('creador')->nullable();

            /*$table->integer('creador_id')->unsigned();
            $table->foreign('creador_id')->references('id')->on('usuarios');*/

            $table->integer('count_comments')->nullable();
            $table->string('imagen')->nullable();
            $table->text('contenido');
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
        Schema::drop('blogs');
    }
}
