<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'blogs';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    //protected $primaryKey = 'id';

    //public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['titulo', 'creador',
    	'count_comments', 'imagen', 'contenido'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    // Relación de categoria con usuarios:
    /*public function creador()
    {
        // 1 blog tiene un creador
        return $this->hasOne('App\User', 'creador_id');
    }*/

    // Relación de categoria con comments:
    public function comments()
    {
        // 1 categoria puede tener varios comments
        return $this->hasMany('App\Commentblog', 'blog_id');
    }
}
