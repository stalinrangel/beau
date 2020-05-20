<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
	/**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'pedidos';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    //protected $primaryKey = 'id';

    //public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['estado', 'subtotal', 'total',
        'country', 'state', 'postcode',
        'usuario_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    //protected $hidden = ['created_at','updated_at'];

    // Relación de pedidos con usuarios (cliente):
	public function usuario()
	{
		// 1 pedido pertenece a un usuario
		return $this->belongsTo('App\User', 'usuario_id');
	}

    // Relación de pedidos con productos:
    public function productos(){
        // 1 pedido contiene muchos productos
        return $this->belongsToMany('\App\Producto','pedido_productos','pedido_id','producto_id')
            ->withPivot('color_id','atributo_id','cantidad','precio_unitario','subtotal')/*->withTimestamps()*/; 
    }

}
