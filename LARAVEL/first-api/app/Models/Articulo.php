<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articulo extends Model
{
    use HasFactory;

    protected $fillable = [
        'titulo',
        'descripcion',
        'cantidad'
    ];

    public function comentarios(){
        return $this->hasMany(Comentario::class);
    }
}
