// Permite escribir en un fichero lo usaremos como base de datos para mantener los cambios
var fs = require("fs");
// Soluciona error CORS
const cors = require('cors');
// Creamos una instancia de express y le decimos que va a usar JSON
var express = require("express");
var app = express();
app.use(express.json());
// Evitar CORS
app.use(cors({
    origin: 'http://localhost:4200'
}));

var url = "/productos";

// Abrimos el puerto de escucha al 3000 y una vez abierto mostramos un mensaje.
app.listen(3000, () => console.log("El servidor está escuchando en el puerto 3000"));

// Creamos una variable JSON
var destinosFichero = "db/productos.json";
// Leemos el listado de destinos almacenados en JSON
var misDestinos = JSON.parse(fs.readFileSync(destinosFichero));

// Devolvemos una respuesta sobre una petición GET dinámica
// Parámetros req = request, res = response, next
app.get(url, (req,res,next) => {
    res.json(misDestinos);
});

// Almacenamos un valor de una petición POST
app.post(url, (req,res,next) => {
    // El destino nuevo se introduce en el cuerpo de la petición
    for (const reqElement of req.body) {
        misDestinos.push(reqElement);
    };
    fs.writeFileSync(destinosFichero, JSON.stringify(misDestinos,null,2));
    res.json(misDestinos);
});

// Actualizamos un valor introduciendo su nombre por parámetros
// Actualizamos un producto por su ID
app.put(url+"/:id", (req,res,next) => {
    const idProducto = parseInt(req.params.id);
    const nuevoProducto = req.body; // El nuevo producto viene en el cuerpo de la petición

    // Buscar el índice del producto con el ID dado
    const index = misDestinos.findIndex(producto => producto.id === idProducto);

    // Si no se encuentra el producto, devolver un error
    if (index === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Actualizar el producto en la lista de destinos
    misDestinos[index] = nuevoProducto;

    // Escribir los cambios de vuelta al archivo JSON
    fs.writeFileSync(destinosFichero, JSON.stringify(misDestinos, null, 2));

    // Devolver el producto actualizado
    res.json(misDestinos[index]);
});


// Borramos un valor introduciendo su nombre por parámetros
app.delete(url +"/:name", (req,res,next) => {
    // :name corresponde con req.params.name
    let nameIndex = misDestinos.indexOf(req.params.name);
    if(nameIndex>= 0){
        misDestinos.splice(nameIndex,1);
        fs.writeFileSync(destinosFichero,  JSON.stringify(misDestinos,null,2));
        res.json(misDestinos);
    }
    else {
        res.json(["Error"]);
    }
});