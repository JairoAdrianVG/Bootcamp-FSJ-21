<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    
    public function register(Request $request){
        try{
 //Validar el request 
 $request->validate([
    'name' => 'required|string|max:255',
    'email' => 'required|string|email|max:255|unique:users',
    'password' => 'required|string|min:8'
]);


$user = User::create([
    'name' => $request->name,
    'email' => $request->email,
    'password' => Hash::make($request->password)
]);

return response()->json([
    'data'=> $user,
    'message'=> 'Usuario registrado correctamente'
],201);
        }catch(Exception $error){
            return $error->getMessage();
        }
       

    }


    public function login(Request $request){
        
        try{
            //Validamos que tenemos los datos que necesitamos
            $request->validate([
                "email" => 'required|string|email',
                "password" => 'required|string|min:8'
            ]);

            //Sacamos del Body de la peticion las credenciales
            $credencials = $request->only('email','password');

            //Si las credenciales NO son correctas enviamos el mensaje y terminamos ejecucion
            if(!Auth::attempt($credencials)){
                return response()->json(["message"=> 'Usuario no autorizado'],401);
            }

            //Si las credenciales son correctas vamos a obtener ese usuario del request
            $user = $request->user();

            //Crear un token para el usuario y lo logeamos;
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'access_token' => $token,
                'type_token' => 'Bearer'
            ]);

        }catch(Exception $error){
            return $error->getMessage();
        }

    }


    public function logout(Request $request){
        try{

            $request->user()->tokens()->delete();
            return response()->json(['message'=> "Te deslogeaste pa"]);

        }catch(Exception $error){
            return $error->getMessage();
        }
    }

}
