<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Atributo extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'atributos';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    //protected $primaryKey = 'id';

    //public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['atributo', 'eliminado',
        'precio', 'cantidad',
        'color_id', 'producto_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['created_at','updated_at'];

    // Relación de atributo con color:
    public function color()
    {
        // 1 atributo pertenece a un color
        return $this->belongsTo('App\Color', 'color_id');
    }

    // Relación de atributo con producto:
    public function producto()
    {
        // 1 atributo pertenece a un producto
        return $this->belongsTo('App\Producto', 'producto_id');
    }
}
