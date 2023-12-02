<!DOCTYPE html>
<html>
<head>
    <title>Búsqueda de Canciones</title>
</head>
<body>
<h1>Búsqueda de canciones</h1>

<form action="" method="POST">
    <?php
    require_once 'SIRadioOpcion.class.php';
    require_once 'SISelect.class.php';

    // Campo de entrada de texto
    $textoABuscar = new SIRadioOpcion("<br>Texto a buscar:", "texto_a_mostrar", "", "");
    echo $textoABuscar->generaSelector()."<input type='text' name='busqueda'><br><br>";

    // Grupo de radio buttons para "Buscar en"
    $busquedaEn = [
        1 => "Títulos de Canción",
        2 => "Nombre de Álbum",
        3 => "Ambos Campos"
    ];
    $busquedaSelector = new SIRadioOpcion("Buscar en:", "busqueda", $busquedaEn, 1);
    echo $busquedaSelector->generaSelector();

    // Lista de opciones para "Género Musical"
    $generos = [
        "todos" => "Todos",
        "rock" => "Rock",
        "blues" => "Blues",
        "jazz" => "Jazz",
        "pop" => "Pop"
    ];
    $generoSelector = new SISelect("<br><br>Género Musical:", "genero_musical", $generos, "todos");
    echo $generoSelector->generaSelector();
    ?><br><br>
    <input type="submit" value="Buscar">
</form>
</body>
</html>