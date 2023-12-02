<?php
include 'agenda.inc.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $agenda = new Agenda("Mi Agenda");
    $contacto = $agenda->getContactoPorId($id);

    if ($contacto) {
        echo 'Contacto ' . $contacto->getId() . ':<br>';
        echo '----------------------------------<br>';
        echo 'Nombre: ' . $contacto->getNombre() . '<br>';
        echo 'Teléfono: ' . $contacto->getTelefono() . '<br>';
        echo 'Fecha de alta: ' . $contacto->getFechaAlta()->format('d-m-Y') . '<br>';
        echo 'Foto: ' . $contacto->getFoto();
    }
}
?>
