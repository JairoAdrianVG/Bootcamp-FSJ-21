<?php 
    //Los modulos de alto nivel, no deben depender de los de bajo nivel
    //Ambos deben depender de abstracciones
    
    class ConexionBD{
        protected $adaptador;
        protected $adaptador2;

        public function __construct()
        {
            $this->adaptador = new MySQL();
            $this->adaptador2 = new MongoDB();
        }

        public function connect(){
            
        }
    }

    class MySQL{

    }

    class MongoDB{

    }

    $conection = new ConexionBD();
?>