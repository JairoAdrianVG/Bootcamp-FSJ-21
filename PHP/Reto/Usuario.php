<?php 
abstract class Usuario{
    protected $idUsuario;
    protected $nombreCompleto;
    protected $salario;
    protected $correo;
    protected $direccion;   
    protected $telefono;
    protected $contrasenha;
    protected $rol;

    public function __construct($idUsuario,$nombreCompleto,$salario,$correo,$direccion,$telefono,$contrasenha,$rol)
    {
        $this->idUsuario = $idUsuario;
        $this->nombreCompleto = $nombreCompleto;
        $this->salario = $salario;
        $this->correo = $correo;
        $this->telefono = $correo;
        $this->contrasenha = $contrasenha;
        $this->rol = $rol;
    }

    // Getters
    public function getIdUsuario() {
        return $this->idUsuario;
    }

    public function getNombreCompleto() {
        return $this->nombreCompleto;
    }

    public function getSalario() {
        return $this->salario;
    }

    public function getCorreo() {
        return $this->correo;
    }

    public function getDireccion() {
        return $this->direccion;
    }

    public function getTelefono() {
        return $this->telefono;
    }

    public function getContrasenha() {
        return $this->contrasenha;
    }

    public function getRol() {
        return $this->rol;
    }

    // Setters
    public function setIdUsuario($idUsuario) {
        $this->idUsuario = $idUsuario;
    }

    public function setNombreCompleto($nombreCompleto) {
        $this->nombreCompleto = $nombreCompleto;
    }

    public function setSalario($salario) {
        $this->salario = $salario;
    }

    public function setCorreo($correo) {
        $this->correo = $correo;
    }

    public function setDireccion($direccion) {
        $this->direccion = $direccion;
    }

    public function setTelefono($telefono) {
        $this->telefono = $telefono;
    }

    public function setContrasenha($contrasenha) {
        $this->contrasenha = $contrasenha;
    }

    public function setRol($rol) {
        $this->rol = $rol;
    }
}



?>