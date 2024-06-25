<?php 

    class Product{
        public $id;
        public $name;
        public $price;
        public $description;
        public $quantity;
        public $category;
        public $connection;
        public $table_name = "products";

        public function __construct($db)
        {
            $this->connection = $db;
        }
    
        public function create(){
            $query = "INSERT INTO " . $this->table_name . " SET name=:name, description=:description, price=:price, quantity=:quantity, category=:category";
            $sentence = $this->connection->prepare($query);
            
            //Limpiar
            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->description = htmlspecialchars(strip_tags($this->description));
            $this->price = htmlspecialchars(strip_tags($this->price));
            $this->quantity = htmlspecialchars(strip_tags($this->quantity));
            $this->category = htmlspecialchars(strip_tags($this->category));
            
            
            //Bind
            $sentence->bindParam(":name",$this->name);
            $sentence->bindParam(":description",$this->description);
            $sentence->bindParam(":quantity",$this->quantity);
            $sentence->bindParam(":category",$this->category);
            $sentence->bindParam(":price",$this->price);

            
            if($sentence->execute()){
                return true;
            }
            return false;
        }


        
        public function update(){
            $query = "UPDATE ". $this->table_name . " SET name=:name, description=:description, price=:price, quantity=:quantity, category=:category WHERE id = :id";
            $sentence = $this->connection->prepare($query);

            //Limpiar
            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->description = htmlspecialchars(strip_tags($this->description));
            $this->price = htmlspecialchars(strip_tags($this->price));
            $this->quantity = htmlspecialchars(strip_tags($this->quantity));
            $this->category = htmlspecialchars(strip_tags($this->category));
            $this->id = htmlspecialchars(strip_tags($this->id));
            
            
            //Bind
            $sentence->bindParam(":name",$this->name);
            $sentence->bindParam(":description",$this->description);
            $sentence->bindParam(":quantity",$this->quantity);
            $sentence->bindParam(":category",$this->category);
            $sentence->bindParam(":price",$this->price);
            $sentence->bindParam(":id",$this->id);

            if($sentence->execute()){
                return true;
            }
            return false;
        }
        
        public function read(){
            $query = "SELECT * FROM ". $this->table_name;
            $sentence = $this->connection->prepare($query);
            $sentence->execute();
            return $sentence;
        }

        public function findOne($id){
            $query = "SELECT * FROM ". $this->table_name." WHERE id = $id";
            $sentence = $this->connection->prepare($query);
            $sentence->execute();
            return $sentence;
        }

        public function delete($id){
            
        }
        
    }

?>