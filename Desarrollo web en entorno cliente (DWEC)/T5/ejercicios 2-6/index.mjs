// Permite escribir en un fichero lo usaremos como base de datos para mantener los cambios
import fs from 'fs';
// Soluciona error CORS
import cors from 'cors';
// Creamos una instancia de express y le decimos que va a usar JSON
import express from 'express';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
// Evitar CORS
app.use(cors({
    origin: 'http://localhost:4200'
}));

var url = "/tasks";

// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));
app.use(express.json());

// Ruta para manejar la solicitud del archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Abrimos el puerto de escucha al 3000 y una vez abierto mostramos un mensaje.
app.listen(3000, () => console.log("El servidor está escuchando en el puerto 3000"));

// Creamos una variable JSON
var tareasFichero = "db/tasks.json";
// Leemos el listado de destinos almacenados en JSON
var misTareas = JSON.parse(fs.readFileSync(tareasFichero));

// Devolvemos una respuesta sobre una petición GET dinámica
app.get('/tasks/:id?', (req, res) => {
    let taskId = req.params.id;

    if (taskId) {
        // Si se proporciona un ID, buscar y devolver la tarea específica
        let task = misTareas.find(task => task._id === taskId);

        if (task) {
            // Enviar el contenido HTML para mostrar solo la tarea específica
            let html= `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                crossorigin="anonymous">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Lista de Tareas</title>
                <link rel="stylesheet" href="style.css">
            </head>`;
            html += `<body>`;
            html += `<div id="placesContainer" class="card-columns">`;
            html += `<div class="card">`;
            html += `<div class="card-body">`;
            html += `<h1>Tarea: ${task._id}</h1>`;
            html += `<p>${task.titulo}</p>`;
            html += `<p>${task.descripcion}</p>`;
            html += `<div class="card-footer">`;
            html += `<p>${task.fecha_creacion}</p>`;
            html += `</div>`;
            html += `</div>`;
            html += `</div>`;
            html += `</div>`;
            html += '</body>';
            html += '</html>';
             // Insertar el contenido dinámico en el marcador de posición
             res.send(html.replace('{{htmlContent}}', html));
        } else {
            res.send("Tarea no encontrada");
        }
    } else {
        // Si no se proporciona un ID, devolver todas las tareas
        let html= `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                crossorigin="anonymous">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Lista de Tareas</title>
                <link rel="stylesheet" href="style.css">
            </head>`;
            html += `<body>`;
            html += `<div id="placesContainer" class="card-columns">`;

        misTareas.forEach(task => {
            html += `<div class="card">`;
            html += `<div class="card-body">${task.titulo}: ${task.descripcion}</div>`;
            html += `</div>`;
        });
        html += '</div>';
        html += '</body>';
        html += '</html>';

        // Insertar el contenido dinámico en el marcador de posición
        res.send(html.replace('{{htmlContent}}', html));
    }
});


// Almacenamos un valor de una petición POST
app.post(url, (req,res,next) => {
    // El destino nuevo se introduce en el cuerpo de la petición
    for (const reqElement of req.body) {
        misTareas.push(reqElement);
    };
    fs.writeFileSync(tareasFichero, JSON.stringify(misTareas,null,2));
    res.json(misTareas);
});

// Actualizamos un valor introduciendo su id por parámetros
app.put(url+"/:id", (req,res,next) => {
    // :id corresponde con req.params.id
    let taskId = req.params.id;
    let taskIndex = misTareas.findIndex(task => task._id === taskId);

    if(taskIndex >= 0 && req.body != null){
        // El parametro a cambiar se introduce en el cuerpo de la petición
        misTareas[taskIndex] = req.body[0];
    } else {
        res.json(["Error"]);
    }
    fs.writeFileSync(tareasFichero, JSON.stringify(misTareas,null,2));
    res.json(misTareas[taskIndex]);
});

// Borramos un valor introduciendo su id por parámetros
app.delete(url +"/:id", (req,res,next) => {
    // :id corresponde con req.params.id
    let taskId = req.params.id;
    let taskIndex = misTareas.findIndex(task => task._id === taskId);

    if(taskIndex >= 0){
        misTareas.splice(taskIndex,1);
        fs.writeFileSync(tareasFichero, JSON.stringify(misTareas,null,2));
        res.json(misTareas);
    } else {
        res.json(["Error"]);
    }
});