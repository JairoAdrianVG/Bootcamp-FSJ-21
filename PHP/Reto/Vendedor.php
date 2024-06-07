<?php 

class Vendedor extends Usuario{ 

    public function __construct($idUsuario,$nombreCompleto,$salario,$correo,$direccion,$telefono,$contrasenha,$rol)
    {
        parent::__construct($idUsuario,$nombreCompleto,$salario,$correo,$direccion,$telefono,$contrasenha,$rol);
    }
    
    public function venderProducto($producto,$cantidad){
        //Logica para restar el stock de un producto
        $stockActual = $producto->getStock();
        $producto->setStock($stockActual-$cantidad);
    }

    public function devolverProducto($producto,$cantidad){
        //Logica para aumentar el stock de un producto
        $stockActual = $producto->getStock();
        $producto->setStock($stockActual+$cantidad);
    }

    }

?>