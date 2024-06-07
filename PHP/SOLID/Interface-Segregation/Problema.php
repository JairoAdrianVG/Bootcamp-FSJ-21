<?php 
    //Si hay una interface grande o sobrecargada, dividir en interfaces pequenias


    interface Empleado{
        public function agregarProductos();
        public function eliminarProductos();
        public function listarProductos();
        public function actualizarProductos();
        public function generarInformes();
        public function actualizarStock();
        public function buscarProducto();
    }

    class Vendedor implements Empleado{
        public function agregarProductos(){}
        public function eliminarProductos(){}
        public function listarProductos(){}
        public function actualizarProductos(){}
        public function generarInformes(){}
        public function actualizarStock(){}
        public function buscarProducto(){}
    }
?>