<?php 
//Principio de Abierto/Cerrado

//Abierto a extensiones
//Cerrado a modificaciones

class ConductorRally{ 
    public function acelerarAuto(Citroen $auto){
        $auto->aumentarVelocidad();
    }

    public function frenarAuto(){}

    public function doblarAuto(){}

}

class Citroen{
    protected $vel;

    public function aumentarVelocidad(){
        $this->vel += 10;
    }

}

class Ford{
    protected $vel;

    public function aumentarVelocidad(){
        $this->vel += 20;
    }
}

$conductor1 = new ConductorRally();
$conductor1->acelerarAuto($auto2);

$auto1 = new Citroen();
$auto2 = new Ford();
?>