<?php

use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
Route::get('/user', function (Request $request) {
    return User::all();
})->middleware('auth:sanctum');*/

Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);

Route::middleware('auth:sanctum')->group(function (){
    Route::get('/user', function (Request $request) {
        return User::all();
    });
    Route::post('/logout',[AuthController::class,'logout']);
});