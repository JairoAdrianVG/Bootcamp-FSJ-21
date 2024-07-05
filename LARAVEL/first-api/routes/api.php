<?php

use App\Http\Controllers\ArticuloController;
use App\Http\Controllers\ComentarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//Route::apiResource('articulos',ArticuloController::class);

Route::get('/articulos',[ArticuloController::class,'index']);
Route::post('/articulos',[ArticuloController::class,'store']);
Route::put('/articulos/{id}',[ArticuloController::class,'update']);
Route::delete('/articulos/{id}',[ArticuloController::class,'destroy']);

Route::get('/comentarios',[ComentarioController::class,'index']);
Route::get('/comentarios/{id}',[ComentarioController::class,'show']);
Route::post('/comentarios',[ComentarioController::class,'store']);
Route::put('/articulos/{id}',[ComentarioController::class,'update']);