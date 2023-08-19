const app = require('./app.js');
const port = app.get('port');
const host = app.get('host');
//const db = require('./controllers/databaseX.js');

app.listen(port, () => {
    console.log(`Iniciar Página web con http://${host}:${port}`);
})

//db.init();