<?php

namespace App\Http\Controllers;

use App\Models\Articulo;
use Illuminate\Http\Request;

class ArticuloController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articulos = Articulo::all();
        return view('articulos.index',['datos' => $articulos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('articulos.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Articulo::create($request->all());
        return redirect('articulos');
    }

    /**
     * Display the specified resource.
     */
    public function show(Articulo $articulo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $articulo = Articulo::findOrFail($id);
        return view('articulos.edit',['data' => $articulo]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $articulo = Articulo::findOrFail($request->id);
        $articulo->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Articulo $articulo)
    {
        //
    }
}
