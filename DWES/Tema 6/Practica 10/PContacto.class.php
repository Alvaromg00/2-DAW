<?php
require_once 'contacto.class.php';
class PContacto extends Contacto
{
private $direccion;
private $ciudad;
private $provincia;

public function __construct($id, $nombre, $telefono, $fecha_alta, $foto, $direccion, $ciudad, $provincia)
{
    parent::__construct($id, $nombre, $telefono, $fecha_alta, $foto);
    $this->direccion=$direccion;
    $this->ciudad=$ciudad;
    $this->provincia=$provincia;
}

public function __toString()
{
    return parent::__toString()." Dirección: ".$this->direccion." Ciudad: ".$this->ciudad." Provincia: ".$this->provincia."<br>";
}

public function __clone()
{
    parent::__clone();
}

}