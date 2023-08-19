const app = require('./app.js');
const port = app.get('port');
const host = app.get('host');
const db = require('./controllers/database.js');
//const db = require('./controllers/databaseX.js');
const express = require('express');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/', db.getDate)

app.listen(port, () => {
    console.log(`Iniciar Página web con http://${host}:${port}`);
})

//db.init();
