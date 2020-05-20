<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'colores';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    //protected $primaryKey = 'id';

    //public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['nombre_color', 'codigo_color', 'eliminado',
        'imagen',
        'producto_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['created_at','updated_at'];

    // Relación de color con atributos:
    public function atributos()
    {
        // 1 color puede tener varios atributos
        return $this->hasMany('App\Atributo', 'color_id');
    }

    // Relación de color con producto:
    public function producto()
    {
        // 1 color pertenece a un producto
        return $this->belongsTo('App\Producto', 'producto_id');
    }
}
