<?php 

    abstract class Persona{
        public function comer(){}

        public function dormir(){}

        public function correr(){}

        abstract function trabajar();
    }


    class Programador extends Persona{
        public function trabajar(){
            
        }
    }

    
?>