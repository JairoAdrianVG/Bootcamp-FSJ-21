<?php 

    //Pilares -> Buenas practicas para que el codigo sea mejor mas legible y mejora su escalabilidad

    //4 Pilares => Encapsulamiento,Abstraccion,Polimorfismo y Herencia
    //Encapsulamiento? Manera de limitar acceso a los datos (atributos o metodos)
    //Abstraccion? Capacidad de crear metodos para interactuar con los datos limitados
    //Polimorfismo? Cambia un comportamiento(metodo) de una clase hija frente a la clase padre
    //Herencia? Capacidad de una clase hija de traer atributos y metodos de una clase padre


    class Animal{
        //Atributos
        private $nombre;
        public $color;
        public $edad;
        public $especie;
        private $pelo;

        //Constructor
        public function __construct($nombre,$color,$edad,$especie,$pelo)
        {
            $this->nombre = $nombre;
            $this->color = $color;
            $this->edad = $edad;
            $this->especie = $especie;
            $this->pelo = $pelo;
        }

        //Metodos
        public function dormir(){
            echo "Estoy durmiending";
        }

        public function comer(){
            echo "Estoy comiending";
        }

        public function respirar(){
            echo "Estoy respiranding";
        }

        public function hacerSonido(){
            echo "Estoy haciending ruiding"."\n";
        }

        //Getters
        public function getNombre(){
            return $this->nombre;
        }

        public function getPelo(){
            return $this->pelo;
        }

        //Setters
        public function setPelo($peinado){
            $this->pelo = $peinado;
        }
    }

    //Crear una Instancia
    $chucho = new Animal("Jacinto","Gris",49,"Aguacatero","Dudoso");

    echo $chucho->getNombre()."\n";
    $chucho->hacerSonido();

    class Pinguino extends Animal{
        private $alas;
        private $pico;

        public function __construct($nombre,$color,$edad,$especie,$pelo,$alas,$pico) {
            //Aclarar que estos atributos son heredados
            parent::__construct($nombre,$color,$edad,$especie,$pelo);
            $this->alas = $alas;
            $this->pico = $pico;
        }
        
        public function aletear(){
            echo "Estoy aleteando bro";
        }

        //Sobreescribir un metodo
        public function hacerSonido()
        {
            //Traer del padre el compotarmiento original
            parent::hacerSonido();
            //Agregamos/Cambiamos comportamiento aplicando polimorfismo
            echo "Cuiiishhh";
        }
    }

    $linux = new Pinguino("Patroclo","Negro y blanco",10,"SO","Plumaje lindo","Cortas","Filoso");
    echo $linux->getNombre()."\n";
    $linux->hacerSonido();


?>