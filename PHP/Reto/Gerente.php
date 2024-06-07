
<?php 

class Gerente extends Usuario{ 

    public function __construct($idUsuario,$nombreCompleto,$salario,$correo,$direccion,$telefono,$contrasenha,$rol)
    {
        parent::__construct($idUsuario,$nombreCompleto,$salario,$correo,$direccion,$telefono,$contrasenha,$rol);
    }


    public function generarInforme($inventario){
        //Logica para generar informes de productos con bajo stock y con mas stock 
        $productos = $inventario->getInventario();

        $minStock = $productos[0];
        $maxStock = $productos[0];
        foreach($productos as $producto){
        if ($producto->getStock() < $minStock->getStock()) {
          $minStock = $producto;
        }

        if ($producto->getStock() > $maxStock->getStock()) {
          $maxStock = $producto;
        }
        }
      echo(array("minStock" => $minStock, "maxStock" => $maxStock));
    
      $total = 0;
      foreach ($productos as $producto) {
        $total += $producto->getPrecio();
      }
      echo $total;
    }
}


?>