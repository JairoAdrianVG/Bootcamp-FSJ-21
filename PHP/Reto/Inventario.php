<?php 

    class Inventario {
        protected $idInventario;
        protected $listaProductos;

        public function __construct($idInventario)
        {  
            $this->idInventario = $idInventario;
            $this->listaProductos = [];
        }

        public function agregarProducto($producto){
            //Agregar un producto nuevo a nuestra lista de productos
            array_push($this->listaProductos,$producto);
        }

        public function eliminarProducto($nombre){
            //Quitar un producto  a nuestra lista de productos
            foreach($this->listaProductos as $producto){
                if($producto->nombre == $nombre){
                    //Logica del unset o de eliminar selectivamente
                    unset($this->listaProductos[$producto]);
                    echo "Producto solo eliminado";
                }else{
                    echo "Producto no encontrado";
                }
            }
        }

        public function getProducto($idProducto){
            //Buscar un producto por el id
            foreach($this->listaProductos as $producto){
                if($producto->idProducto == $idProducto){
                    return $producto;
                }else{
                    echo "Producto no encontrado";
                }
            }
        }

        public function getInventario(){
            //Obtener toda la lista de productos
            return $this->listaProductos;
        }

        public function editarProducto($idProducto,$nombre,$descripcion,$precio){  
            //Editar cualquier dato de un producto
            $producto = $this->getProducto($idProducto);
            $producto->setNombre($nombre);
            $producto->setPrecio($precio);

            if($descripcion == ""){
               $descripcion =  $producto->getDescripcion();
            }
            $producto->setDescripcion($descripcion);

        }

        public function reponerProducto($idProducto,$cantidad){
            //Actualizar solo el STOCK a traves de reponer productos en bodega
            $producto = $this->getProducto($idProducto);
            $stock = $producto->getStock();
            $producto->setStock($stock+$cantidad);
            
        }

        
    }
?>