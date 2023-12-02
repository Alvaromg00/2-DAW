<?php
require_once 'contacto.class.php';
class EContacto extends Contacto
{
    private $email;
    private $url;

    public function __construct($id, $nombre, $telefono, $fecha_alta, $foto, $email, $url)
    {
        parent::__construct($id, $nombre, $telefono, $fecha_alta, $foto);
        $this->email=$email;
        $this->url=$url;
    }

    public function __toString()
    {
        return parent::__toString()." Email: ".$this->email." URL: ".$this->url."<br>";
    }

    public function __clone()
    {
        parent::__clone();

    }
}
?>