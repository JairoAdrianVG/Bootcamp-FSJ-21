@extends('layout')

@section('contenido')

<section class="container">
<table class="table table-striped mt-4">
    <thead>
        <tr>
            <th>#ID</th>
            <th>Titulo</th>
            <th>Descripcion</th>
            <th>Cantidad</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        @foreach($datos as $articulo)
        <tr>
            <td>{{$articulo->id}}</td>
            <td>{{$articulo->titulo}}</td>
            <td>{{$articulo->descripcion}}</td>
            <td>{{$articulo->cantidad}}</td>
            <td>
                <a href="{{url('articulos/'.$articulo->id)}}" class="btn btn-warning">Editar</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
<article>
    <a class="btn btn-success" href="{{url('articulos/create')}}">Agregar Articulo</a>
</article>
</section>

@endsection