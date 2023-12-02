<?php
require 'contacto.class.php';
    class Agenda{
        private $nombre;
        private $contactos;
        public function __construct($nombre) {
            $this->nombre = $nombre;
            $this->contactos = array();

            $contacto1=new Contacto(1, "Álvaro", "999999999", new DateTime(), "foto1.jpg");
            $contacto2=new Contacto(2, "Roberto", "123456789", new DateTime(), "foto2.jpg");
            $contacto3=new Contacto(3, "Pedro", "987654321", new DateTime(), "foto3.jpg");

            $this->contactos[]=$contacto1;
            $this->contactos[]=$contacto2;
            $this->contactos[]=$contacto3;
        }
        public function anadirContacto(Contacto $contacto) {
            $this->contactos[] = $contacto;
        }
        public function getContactoPorId($id) {
            foreach ($this->contactos as $contacto) {
                if ($contacto->getId() == $id) {
                    return $contacto;
                }
            }
            return null; // Devuelve null si el contacto no se encuentra
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
            foreach ($this->contactos as $contacto) {
                $agendaString .= $contacto . "<br>";
            }
            return $agendaString;
        }
        public function __clone() {
            $this->nombre = $this->nombre."-clon";
        }
    }
?>