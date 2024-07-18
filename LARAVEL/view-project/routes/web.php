<?php

use App\Http\Controllers\ArticuloController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/articulos',[ArticuloController::class,'index']);
Route::post('/articulos',[ArticuloController::class,'store']);
Route::get('/articulos/create',[ArticuloController::class,'create']);
Route::get('/articulos/{id}',[ArticuloController::class,'edit']);
Route::put('/articulos',[ArticuloController::class,'update']);