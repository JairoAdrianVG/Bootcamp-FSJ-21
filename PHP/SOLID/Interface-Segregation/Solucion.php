<?php 
  interface EmpleadoVendedor{
    public function listarProductos();
    public function buscarProducto();
    public function actualizarStock();
}

interface EmpleadoBodega{
    public function actualizarProductos();
}

interface EmpleadoGerente{
    public function agregarProductos();
    public function generarInformes();
    public function eliminarProductos();
}

?>