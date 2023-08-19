const express = require('express');
const server = express();
const cors = require('cors');
const path = require('path');
const pool = require('./controllers/database.js'); // Importa el módulo pool para la conexión

// Configuraciones
server.set('port', 8080);
server.set('host', 'localhost');

// Middlewares
server.use(express.json());
server.use(express.static(path.join(__dirname, 'build')));
server.use(cors());
server.use('/estudiantes', require('./routes/estudiantes.js'));
server.use('/profesores', require('./routes/profesores.js'));

// Rutas
server.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.get('*', (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h2>Página no encontrada</h2>")
});


module.exports = server;