<?php
require_once 'agenda.inc.php';

$miAgenda = new Agenda("Mi Agenda");

$EContacto1=new EContacto(1, "Álvaro", "666666666", new DateTime(), "Foto1.jpg", "amorong03@iesvjp.es", "www.alvaro.com");
$EContacto2=new EContacto(2, "Pepe", "222222222", new DateTime(), "Foto2.jpg", "pepe@iesvjp.es", "www.pepe.com");
$EContacto3=new EContacto(3, "Andres", "111111111", new DateTime(), "Foto3.jpg", "andres@iesvjp.es", "www.andres.com");

$PContacto1=new PContacto(4, "Pedro", "123456789", new DateTime(), "Foto4.jpg", "Calle Principal", "Plasencia", "Cáceres");
$PContacto2=new PContacto(5, "Antonio", "66777777777", new DateTime(), "Foto5.jpg", "Calle Goya", "Madrid", "Madrid");
$PContacto3=new PContacto(6, "Roberto", "8885777777", new DateTime(), "Foto6.jpg", "Calle Serrano", "Barcelona", "Barcelona");


$miAgenda->anadirContacto($EContacto1);
$miAgenda->anadirContacto($EContacto2);
$miAgenda->anadirContacto($EContacto3);
$miAgenda->anadirContacto($PContacto1);
$miAgenda->anadirContacto($PContacto2);
$miAgenda->anadirContacto($PContacto3);

echo "<h1>Contactos</h1>";
echo $miAgenda;

?>
