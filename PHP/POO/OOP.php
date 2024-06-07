<?php 
    //Que es OOP o POO?
    //Los objetos y las clases son utilizadas para organizar codigo y describir lo que pueden hacer
    //Es una manera de programar que se basa en clases y objetos
    //A traves de un molde (clase) describimos las caracteristicas o cualidades de un objeto

    class Person{
        //Caracteristicas o cualidades => Atributos
        public $name;
        public $age;

        // Metodo Constructor => Ingresar los atributos al momento de instanciar
        public function __construct($name,$age)
        {
            //Apuntar a los atributos y asignar el valor
            $this->name = $name;
            $this->age = $age;            
        }

        //Acciones  => Metodos
        public function eat(){
            echo "Estoy comiending";
        }


    }
    
    //Instanciar -> Crear un objeto en base a una clase
    $personUAN = new Person("Jairo",75);

?>