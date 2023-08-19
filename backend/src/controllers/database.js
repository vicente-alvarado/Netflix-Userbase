const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:password@localhost:5432/NetflixUserbase');

db.query('SELECT * FROM User')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        // Maneja el error
    });



