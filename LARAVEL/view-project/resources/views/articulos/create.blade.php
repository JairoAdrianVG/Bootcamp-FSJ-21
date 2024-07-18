@extends('layout')
@section('contenido')
    <section class="container d-flex justify-content-center">
        <article class="card mt-4" style="width: 40rem;">
            <div class="card-header fw-bolder">Agregar Articulo</div>
            <div class="card-body">
    <form action="{{url('articulos')}}"  method="POST">
        @csrf
    <label for="titulo" class="form-label fw-semibold mt-2">Titulo</label>
        <input type="text" id="titulo" name="titulo" class="form-control" placeholder="Ingrese un titulo"/>
        <label for="descripcion" class="form-label fw-semibold mt-2">Descripcion</label>
        <input type="text" id="descripcion" name="descripcion" class="form-control" placeholder="Ingrese una descripcion"/>
        <label for="cantidad" class="form-label fw-semibold mt-2">Cantidad</label>
        <input type="text" id="cantidad" name="cantidad" class="form-control" placeholder="Ingrese la cantidad"/>
        <button type="submit" class="btn btn-success mt-2 fw-semibold">Agregar articulo</button>
    </form>
    </div>
    </article>
    </section>
@endsection