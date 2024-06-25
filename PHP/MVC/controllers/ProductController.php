<?php 
require_once './models/Product.php';
require_once './config/database.php';

class ProductController{
    public $product;
    public $db;

    public function __construct(){
        $database = new Database();
        $this->db = $database->getConnection();
        $this->product = new Product($this->db);
    }   
    

    public function create(){
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $this->product->name = $_POST['name'];
            $this->product->description = $_POST['description'];
            $this->product->price = $_POST['price'];
            $this->product->quantity = $_POST['quantity'];
            $this->product->category = $_POST['category'];

            if($this->product->create()){
                header("Location: ./views/index.php");
            }else{
                echo "Error al crear el producto";
            }
        }else{
            include './views/create.php';
        }
    }
    
    public function read(){
        $sentence = $this->product->read();
        $products = $sentence->fetchAll(PDO::FETCH_ASSOC);
        include './views/index.php';
    }

    public function update($id){
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $this->product->name = $_POST['name'];
            $this->product->description = $_POST['description'];
            $this->product->price = $_POST['price'];
            $this->product->quantity = $_POST['quantity'];
            $this->product->category = $_POST['category'];
            $this->product->id = $id;

            if($this->product->update()){
                header("Location: ./views/index.php");
            }else{
                echo "Error al crear el producto";
            }
        }else{
        $sentence = $this->product->findOne($id);
        $producto = $sentence->fetch(PDO::FETCH_ASSOC);;
        include './views/edit.php';
    }
    }

}


?>