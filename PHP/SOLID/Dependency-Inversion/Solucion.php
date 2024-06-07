<?php 

interface AdapterInterface{
    public function connect();
}


class ConexionBD{
    protected $adaptador;

    public function __construct(AdapterInterface $adapter)
    {
        $this->adaptador = $adapter;
    }

    public function conectarBD(){
        $this->adaptador->connect();
    }
}

class MySQL implements AdapterInterface{
    public function connect(){}
}
class MongoDB implements AdapterInterface{
    public function connect(){}
}

class CassandraDB implements AdapterInterface{
    public function connect(){}
}

class MariaDB implements AdapterInterface{
    public function connect(){}
}
?>