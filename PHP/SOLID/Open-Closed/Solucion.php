<?php 

interface AutoI{
    public function aumentarVelocidad();
}

class ConductorRally{ 
     public function acelerarAuto(AutoI $auto){
        $auto->aumentarVelocidad();
    }

    public function frenarAuto(){}

    public function doblarAuto(){}

}

class Citroen implements AutoI{
    protected $vel;

    public function aumentarVelocidad(){
        $this->vel += 10;
    }
}

class Ford implements AutoI{
    protected $vel;

    public function aumentarVelocidad(){
        $this->vel += 20;
}}

$conductor1 = new ConductorRally();
$conductor1->acelerarAuto($auto2);

$auto1 = new Citroen();
$auto2 = new Ford();

?>