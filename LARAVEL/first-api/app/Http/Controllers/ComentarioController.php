<?php

namespace App\Http\Controllers;

use App\Models\Comentario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ComentarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $comentariosConArticulo = DB::table('comentarios')
        ->join('articulos','articulos.id','=','comentarios.articulo_id')
        ->select('comentarios.*','articulos.titulo')
        ->get();

       return response()->json($comentariosConArticulo);
       // return $comentariosConArticulo;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $articulo = Comentario::create($request->all());
        return response()->json($articulo,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //$comment = Comentario::with('articulo:id,titulo')->find($id);

        
        $comentario = DB::table('comentarios')
        ->where('comentarios.id','=',$id)
        ->join('articulos','articulos.id','=', 'comentarios.articulo_id')
        ->select('comentarios.*','articulos.titulo')
        ->get();

        return response()->json($comentario);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $comentario = Comentario::findOrFail($id);
        $comentario->update($request->all());
        return response()->json($comentario,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
