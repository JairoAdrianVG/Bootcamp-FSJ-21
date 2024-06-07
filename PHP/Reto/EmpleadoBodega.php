<?php
class EmpleadoBodega extends Usuario{ 

public function __construct($idUsuario,$nombreCompleto,$salario,$correo,$direccion,$telefono,$contrasenha,$rol)
{
    parent::__construct($idUsuario,$nombreCompleto,$salario,$correo,$direccion,$telefono,$contrasenha,$rol);
}

}
?>