<?php

use App\Http\Controllers\ArticuloController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//Route::apiResource('articulos',ArticuloController::class);

Route::get('/articulos',[ArticuloController::class,'index']);
Route::post('/articulos',[ArticuloController::class,'store']);
Route::put('/articulos/{id}',[ArticuloController::class,'update']);