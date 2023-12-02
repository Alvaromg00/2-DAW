<?php
require 'agenda.inc.php';

// Crear un objeto agenda
$miAgenda = new Agenda("Mi Agenda");

// Creo tres contactos
$contacto1 = new Contacto(1, "Pepe", "111111111", new DateTime(), "foto1.jpg");
$contacto2 = new Contacto(2, "Álvaro", "9111111111", new DateTime(), "foto2.jpg");
$contacto3 = new Contacto(3, "Alberto", "3333333333", new DateTime(), "foto3.jpg");

// Agregar los contactos a la agenda
$miAgenda->anadirContacto($contacto1);
$miAgenda->anadirContacto($contacto2);
$miAgenda->anadirContacto($contacto3);

// Mostrar la agenda
echo "<h2>AGENDA</h2><br>";
echo $miAgenda;
echo "**Eliminando contacto 1 y clonando contacto 2: **<br>";

// Eliminar el primer contacto
$miAgenda->borrarContacto($contacto1);

// Clonar el segundo contacto
$contactoClonado = clone $contacto2;

// Agregar el clon a la agenda
$miAgenda->anadirContacto($contactoClonado);

// Mostrar la agenda nuevamente
echo "<h2>AGENDA</h2>";
echo $miAgenda;
echo "**Añadimos 3 contactos: **<br><br>";
echo "**Clonamos la Agenda, eliminamos el contacto 2 y cambiamos el nombre de Alberto por Juan: **";

// Agrego tres nuevos contactos a la copia
$contacto4 = new Contacto(4, "Roberto", "12456789", new DateTime(), "foto4.jpg");
$contacto5 = new Contacto(5, "Ana", "987654321", new DateTime(), "foto5.jpg");
$contacto6 = new Contacto(6, "Pedro", "000000000", new DateTime(), "foto6.jpg");

//añado esos contactos a la agenda clonada
$miAgenda->anadirContacto($contacto4);
$miAgenda->anadirContacto($contacto5);
$miAgenda->anadirContacto($contacto6);

// Creo una copia de la agenda
$copiaAgenda = clone $miAgenda;

// Eliminar el primer contacto de la copia
$copiaAgenda->borrarContacto($contacto4);

// Modificar el nombre del segundo contacto de la copia
$copiaAgenda->getContactos()[1]->setNombre("Juan");

echo "<h2>AGENDA</h2>";
echo $miAgenda;
echo "<h2>AGENDA-clon</h2>";
echo $copiaAgenda;
?>
