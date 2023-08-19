const db = require('./database.js')
const estControl = {};

estControl.getEstudiantes = (req,res)=>res.json(db.estudiantes);
estControl.getEstudiante = (req,res)=>{
    const estudiante = db.estudiantes.find(
        (est)=>est.id == req.params.id
    );

    res.json(estudiante);
}

estControl.postEstudiante = (req,res)=>{
    const {id, nombre,apellido} = req.body;
    if(!id || !nombre || !apellido){
        res.status(400).send("Datos incompletos {id, nombre, apellido}");
        return;
    }
    const nombresEstudiantes = db.estudiantes.map(estudiante => estudiante.nombre)
    if(nombresEstudiantes.includes(nombre)){
    res.status(400).send(`Nombre: ${nombre} ya existe en la base de datos`);
    return;
    }
    const estudiante = {
        id,
        nombre,
        apellido
    }
    db.estudiantes.push(estudiante);
    db.updateDB();
    res.send('Estudiante ingresado con éxito');
}

estControl.putEstudiante = (req,res)=>{
    const {nombre,apellido} = req.body;

    if(!nombre || !apellido){
        res.status(400).send("Datos incompletos {nombre, apellido}");
        return;
    }
    const estudiante = db.estudiantes.find(
        (est)=>est.id == req.params.id
    );
    if (!estudiante){
        res.status(400).send("No existe el id:" + req.params.id);
        return;
    }

    estudiante.nombre = nombre;
    estudiante.apellido = apellido;
    db.updateDB();
    res.send('Estudiante actualizado');
}

estControl.deleteEstudiante = (req,res)=>res.json({mensaje: "Estudiante eliminado"});

module.exports = estControl;
