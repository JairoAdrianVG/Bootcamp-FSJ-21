<?php 
    //Liskov Substitution: 
    //Tener subclase que tenga atributos propios y el hijo no importaba si el que heradaba el otro quedaba intacto, eso es lo que se entendio masomenos io ke c no soi ingeniero
    //Una clase derivada debe ser capaz de reemplazar a una clase padre sin que el programa falle
    //La clase derivada o hija hereda los atributos y funciones del padre entonces por eso funciona


    class Persona {
        public function comer(){}

        public function dormir(){}

        public function correr(){}
    }

    class Programador extends Persona{
        public function codear(){
            
        }
    }
?>