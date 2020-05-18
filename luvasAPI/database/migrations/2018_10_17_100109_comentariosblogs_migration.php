<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ComentariosblogsMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comentariosblogs', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('blog_id')->unsigned();
            $table->foreign('blog_id')->references('id')->on('blogs');

            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->text('comment');

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
        Schema::drop('comentariosblogs');
    }
}
