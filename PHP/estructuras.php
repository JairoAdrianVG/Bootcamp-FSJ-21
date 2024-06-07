<?php 
    // Que es una estructura de datos?
    // Una forma de organizar y almacenar datos de forma eficiente

    $variable = "Holiwi";


    //Array indexado
    $array1 = [1,2,5,6];
    
    //Array asociativo
    $arrayAsociativo = array(
        "nombre" => "Manzana",
        "color" => "Roja"
     );

    //Array multidimensional o Matrices
    $arrayMultidimensional = [
        [1,2],[3,4],[5,6],[7,8]
    ];

    //Objetos (Clases)

    class Persona {

        //Atributos
        public $nombre;
        public $edad;

        //Constructor
        function __construct($nombre,$edad)
        {
            $this->nombre = $nombre;
            $this->edad = $edad;
        }

        //Metodos
        function comer(){
            return "Estoy comiendo";
        }

        function dormir(){
            return "ZzZzZZzzz";
        }

        function respirar(){
            return "Estoy respirando";
        }
    }

    $persona1 = new Persona("Katherine",20);
    $persona2 = new Persona("Alex",21);

    //Stack (pila)  -> LIFO LastInFirstOut

    class Stack {
        public $stack;

        function __construct()
        {
            $this->stack = array();
        }

        function add($item){
            array_push($this->stack,$item);
        }

        function delete(){
            
            if($this->isEmpty() ){
                return null;
            }

           return array_pop($this->stack);
        }
        function isEmpty(){
            return empty($this->stack);
        }
    }

    $stackito = new Stack();
    $stackito->add(1);
    $stackito->add(2);
    $eleminado = $stackito->delete();
    

    // Queue o Colas FIFO FirstInFirstOut

    class Queue {
        public $queue;

        function __construct()
        {
            $this->queue = array();
        }

        //Funcion que agrega datos a nuestra Queue
        function enqueue($item){
            array_push($this->queue,$item);
        }

        //Funcion que elimina datos de nuestra Queue
        function dequeue(){
            if($this->isEmpty()){
                return null;
            }

            return array_shift($this->queue);
        }

        //Funcion para validar si nuestra Queue esta vacia
        function isEmpty(){
            return empty($this->queue);
        }
    }
    
    //Listas Enlazadas
/*
    class Node {
        public $data;
        public $next; 

        function __construct($value)
        {
            $this->data = $value;
            $this->next = null;
        }
    }

    class LinkedList{
        public $head;

        function __construct()
        {
            $this->head = null;
        }

        function insert($data){
            $newNode = new Node($data); //Tomate

            //Check si head = Null 
            if($this->head === null){
                $this->head = $newNode; //Guardo un nodo
            } else{
                //VARIABLE AUXILIAR CURRENT nos sirve para guardar el nodo
                $current = $this->head;
                //Si el NEXT del Nodo es DISTINTO A NULL
                while($current->next !== null){
                    $current = $current->next;
                }
                
                $current->next = $newNode;
            }
        }

        function delete($data){
            //Si la lista esta vacia HEAD=NULL
            if($this->head === null){
                return;
            }

            if($this->head->data === $data){
                //Guardo en head, en nodo siguiente
                $this->head = $this->head->next;
                return "Encontrado.";
            }

        }

        function deleteAll(){
            if($this->head === null){
                return;
            }

            $this->head = null;
            return "La lista se ha vaciado.";
        }

        function deleteLast(){
            if($this->head === null){
                return;
            }

            $current = $this->head;
            //Si el NEXT del Nodo es DISTINTO A NULL
            while($current->next->next !== null){
                $current = $current->next;
            }
            $current->next = null;
        }





        function print(){
            //Validamos si la lista esta vacia
            if($this->head === null){
                return;
            }

            //VARIABLE AUXILIAR para guardar el nodo actual
            $current = $this->head;

            while($current !== null){
                echo $current->data;
                $current = $current->next;
            }
            
        }
    }

    $listitaDelSuper = new LinkedList();
    $listitaDelSuper->insert("Tomate");
    $listitaDelSuper->insert("Leche");
    $listitaDelSuper->insert("Huevos");
    //print($listitaDelSuper->delete("Tomate"));
    //print_r($listitaDelSuper);
    //print($listitaDelSuper->deleteAll());
*/
class Node{ 
    public $value;
    public $left;
    public $right;

    function __construct($data)
    {
        $this->value = $data;
        $this->left = null;
        $this->right = null;
    }
}

class BinaryTree {
    public $root;

    function __construct()
    {
        $this->root = null;
    }

    function insert($data){
        //Creamos un nuevo nodo
        $newNode = new Node($data);

        //Validamos si el arbol esta vacio
        if($this->root === null){
            $this->root = $newNode;
            return;
        }

        //Ya tenemos algun nodo en nuestro arbol
        //Valor actual (root) o un nodo prexistente
        $current = $this->root;
        $flag = true;

        while($flag){
        if($newNode->value === $current->value) return "Ya esta pibe";
        if($newNode->value < $current->value){
            if($current->left === null){ //Si a la izquierda no tengo nodo guardado
                $current->left = $newNode;
                return;
            }
            $current = $current->left; //Si tengo nodo guardado, cambio current para comparar
        } else{
            if($current->right === null){//Si la derecha esta vacia 
                $current->right = $newNode; //Guardo nuevo nodo
                return;
            }
            $current = $current->right;//Si tengo nodo guardado, cambio current para comparar
            }
        }
    }

    function delete($data){
        $this->root = $this->deleteNode($this->root,$data);
    }

    function deleteNode($node,$data){
        // Si el nodo que recibe esta vacio retonarmos null
        if($node === null){
            return null;
        }

        //Caso de que el dato sea menor al nodo actual
        if($data < $node->value){
            //En la izquierda guardame lo que resulte de ejecutar esta funcion hacia la izquierda
            $node->left = $this->deleteNode($node->left,$data);
        //Caso de que el dato sea mayor al nodo actual
        }elseif($data > $node->value){
            //En la derecha guardame lo que resulte de ejecutar esta funcion hacia la derecha
            $node->right = $this->deleteNode($node->right,$data);
        //Caso de que el dato sea el que buscamos 
        }else{

            //Averiguar si no tiene algo a la izquierda
           if($node->left === null){
            //Retornamos el nodo a la derecha
            return $node->right;
            //Averiguar si no tiene algo a la derecha
           }elseif($node->right === null){
            return $node->left;
           }

           //Busca y reemplaza
           $node->right = $this->deleteNode($node->right,$node->value);
        }
        return $node;
    }
}

$arbolito = new BinaryTree();
$arbolito->insert(10);
$arbolito->insert(7);
$arbolito->insert(15);
$arbolito->insert(13);
$arbolito->delete(15);
print_r($arbolito);
?>
