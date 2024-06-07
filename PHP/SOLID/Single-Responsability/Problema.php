<?php 
// Single Responsability: 
// No sobrecargar las funcionalidades de una aplicacion
// Tener todo lo relacionado a 1 funcionalidad dentro del mismo archivo (dentro de lo posible)
// Ser logico dentro de lo que estes trabajando teniendo en cuenta responsabilidades
// Eliminar redundancias

class MenuTienda{

    public function mostrarLista(){} //SI

    public function logIn(){} //NO

    public function logOut(){} //NO

    public function agregarProductoCarrito(){} //NO

    public function pagarCarrito(){} //NO

}

?>