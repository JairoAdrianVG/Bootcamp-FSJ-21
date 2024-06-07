<?php 

class Producto {
    protected $idProducto;
    protected $nombre; //X
    protected $descripcion; //X
    protected $precio; //X
    protected $cantidad;
    protected $categoria;

    public function __construct($idProducto, $nombre, $descripcion, $precio, $cantidad, $categoria) {
        $this->idProducto = $idProducto;
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->precio = $precio;
        $this->cantidad = $cantidad;
        $this->categoria = $categoria;
    }

    // Getters
    public function getIdProducto() {
        return $this->idProducto;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function getDescripcion() {
        return $this->descripcion;
    }

    public function getPrecio() {
        return $this->precio;
    }

    public function getCantidad() {
        return $this->cantidad;
    }

    public function getCategoria() {
        return $this->categoria;
    }

    // Setters
    public function setIdProducto($idProducto) {
        $this->idProducto = $idProducto;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function setDescripcion($descripcion) {
        $this->descripcion = $descripcion;
    }

    public function setPrecio($precio) {
        $this->precio = $precio;
    }

    public function setCantidad($cantidad) {
        $this->cantidad = $cantidad;
    }

    public function setCategoria($categoria) {
        $this->categoria = $categoria;
    }
}

?>