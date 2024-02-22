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
app.get('/productos/:id?', (req, res) => {
    let productId = req.params.id;

    if (productId) {
        // Si se proporciona un ID, buscar y devolver el producto específico
        let producto = misDestinos.find(producto => producto.id === parseInt(productId));

        if (producto) {
            // Si se encuentra el producto, devolverlo como respuesta en formato JSON
            res.json(producto);
        } else {
            // Si no se encuentra el producto, devolver un mensaje de error
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } else {
        // Si no se proporciona un ID, devolver todos los productos
        res.json(misDestinos);
    }
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
app.put("/productos/editar/:id", (req, res, next) => {
    const productId = req.params.id;
    const updatedProductData = req.body;

    // Buscar el producto por su ID en el array de destinos
    const index = misDestinos.findIndex(producto => producto.id === parseInt(productId));

    if (index !== -1) {
        // Si se encuentra el producto, actualizar sus datos
        misDestinos[index] = { ...misDestinos[index], ...updatedProductData };

        // Guardar los cambios en el archivo JSON
        fs.writeFileSync(destinosFichero, JSON.stringify(misDestinos, null, 4));

        // Devolver el producto actualizado como respuesta
        res.json(misDestinos[index]);
    } else {
        // Si no se encuentra el producto, devolver un mensaje de error
        res.status(404).json({ error: 'Producto no encontrado' });
    }
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