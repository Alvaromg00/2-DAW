<?php
class Contacto {
    private $id;
    private $nombre;
    private $telefono;
    private $fecha_alta;
    private $foto;
    public function __construct($id, $nombre, $telefono, $fecha_alta, $foto) {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->telefono = $telefono;
        $this->fecha_alta = $fecha_alta;
        $this->foto = $foto;
    }
    public function getId() {
        return $this->id;
    }
    public function getNombre() {
        return $this->nombre;
    }
    public function getTelefono() {
        return $this->telefono;
    }
    public function getFechaAlta() {
        return $this->fecha_alta;
    }
    public function getFoto() {
        return $this->foto;
    }
    public function setId($id) {
        $this->id = $id;
    }
    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }
    public function setTelefono($telefono) {
        $this->telefono = $telefono;
    }
    public function setFechaAlta($fecha_alta) {
        $this->fecha_alta = $fecha_alta;
    }
    public function setFoto($foto) {
        $this->foto = $foto;
    }
    public function __toString() {
        return "Contacto " . $this->id . "</br>------------------------------------" . "<br>Nombre: " . $this->nombre . "<br>Teléfono: " . $this->telefono . "<br>Fecha de Alta: " . $this->fecha_alta->format('d-m-Y') . "<br>Foto: " . $this->foto . ": <a href='vercontacto.view.php?id=" . $this->id . "'>Ver contacto</a><br>";
    }
    public function __clone() {
        $this->nombre = $this->nombre.'-clon';
    }
}
?>