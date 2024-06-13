<?php 
require_once '../models/Product.php';

class ProductController{
    public $product;
    public $db;

    public function __construct(){
        $database = new Database();
        $this->db = $database->getConnection();
        $this->product = new Product($this->db);
    }   
    

    public function create(){
        $this->product->name = $_POST['name'];
    }
    

}


?>