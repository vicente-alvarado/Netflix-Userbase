const db = require('./databaseX.js')
const estControl = {};
estControl.getProfesores = (req,res)=>res.json(db.profesores);
estControl.getProfesor = (req,res)=>{
const profesor = db.practico.find(
(est)=>est.id == req.params.id
);
if (!profesor) {
res.status(400).send("No existe el id: " + req.params.id);
return;
}
res.json(profesor);
}
estControl.postProfesor = (req,res)=>{
const {id, nombre, edad} = req.body;
if(!id || !nombre || !edad){
res.status(400).send("Datos incompletos {id, nombre, edad}");
return;
}
const nombresProfesores = db.teorico.map(profesor => profesor.nombre)
if(nombresProfesores.includes(nombre)){
res.status(400).send(`Nombre: ${nombre} ya existe en la base de datos`);
return;
}
const profesor = {
id,
nombre,
edad
}
db.teorico.push(profesor);
db.updateDB();
res.send('Profesor ingresado con éxito');
}
estControl.putProfesor = (req,res)=>{
const {nombre,edad} = req.body;
if(!nombre || !edad){
res.status(400).send("Datos incompletos {nombre, edad}");
return;
}
const profesor = db.teorico.find(
(est)=>est.id == req.params.id
);
if (!profesor){
res.status(400).send("No existe el id:" + req.params.id);
return;
}
const nombresProfesores = db.teorico.map(profesor => profesor.nombre)
if(nombresProfesores.includes(nombre)){
res.status(400).send(`Nombre: ${nombre} ya existe en la base de datos`);
return;
}
profesor.nombre = nombre;
profesor.edad = edad;
db.updateDB();
res.send('Profesor actualizado');
}
estControl.deleteProfesor = (req,res)=>{
const index = db.teorico.findIndex(
(est)=>est.id == req.params.id
);
if(index < 0){
res.status(400).send("Id de profesor no encontrado");
return;
}
db.teorico.splice(index,1);
db.updateDB();
res.send('Profesor eliminado');
}
module.exports = estControl;