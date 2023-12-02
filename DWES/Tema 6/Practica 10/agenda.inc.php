<?php
require_once 'contacto.class.php';
require_once 'EContacto.class.php';
require_once 'PContacto.class.php';
    class Agenda{

        private $nombre;
        private $contactos;

        public function __construct($nombre) {
            $this->nombre = $nombre;
            $this->contactos = array();
        }

        public function anadirContacto(Contacto $contacto) {
            $this->contactos[] = $contacto;
        }

        public function getNombre() {
            return $this->nombre;
        }

        public function setNombre($nombre) {
            $this->nombre = $nombre;
        }

        public function getContactos() {
            return $this->contactos;
        }

        public function setContactos($contactos) {
            $this->contactos = $contactos;
        }

        public function borrarContacto(Contacto $contacto) {
            $key = array_search($contacto, $this->contactos);
            if ($key !== false) {
                unset($this->contactos[$key]);
            }
        }

        public function __toString() {
            $contactos="";
            foreach ($this->contactos as $contacto) {
                $contactos .= $contacto . "<br>";
            }
            return $contactos;
        }

        public function __clone() {
            $this->nombre = $this->nombre."-clon";
        }
    }
?>