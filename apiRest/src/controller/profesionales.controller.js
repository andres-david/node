const { Professional } = require("../models/claseProfesional");

let profesionales = null;

let profesional1 = new Professional('David', 30, 'M', 60, 1.70);
let profesional2 = new Professional('Andrés', 20, 'M', 70, 1.80);

profesionales = [profesional1, profesional2];

profesionales.length

function getStart( request, response ){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send( respuesta );
    next();
}

function getProfesionalesParams( request, response ){
    let id = request.params.id;

    let respuesta;

    if( profesionales.length > id ){

        respuesta = profesionales[id];

    }
    else{
        respuesta = {error: true, codigo: 200, mensaje: "El usuario no existe"};
    }

    response.send( respuesta );
}

function getProfesionales( request, response ){

    let respuesta;
    
    if( profesionales != null ){
        respuesta = profesionales;
    }
    else{
        respuesta = {error: true, codigo: 200, mensaje: "El usuario no existe"}
    }

    response.send( respuesta );

}

function postProfesionales( request, response ){

    let respuesta; 

    console.log( request.body );

    let nuProfesional = new Professional( request.body.name, request.body.age, request.body.genre, request.body.height, request.body.weight )

    profesionales.push( nuProfesional );

    respuesta = {error: false, codigo: 200, 
                mensaje: 'Nuevo usuario creado', resultado: profesionales}


    response.send( respuesta );

}

function putProfesionales( request, response ){

    let id = request.body.id;

    let respuesta;

    if( profesionales.length > id ){

        profesionales[id].name   = request.body.name;
        profesionales[id].age    = request.body.age;
        profesionales[id].genre  = request.body.genre;
        profesionales[id].weight = request.body.weight;
        profesionales[id].height = request.body.height;

        respuesta = {error: false, codigo: 200, 
            mensaje: 'Usuario actualizado', resultado: profesionales};

    }
    else{
        respuesta = { error: true, codigo: 200, 
                    mensaje: 'Profesional no existente', resultado: profesionales}
    }

    response.send( respuesta );

}

function deleteProfesionales( request, response ){

    let id = request.body.id;

    let respuesta;

    if( profesionales.length > id ){

        profesionales.splice( id, 1 );

        respuesta = {error: false, codigo: 200,
                    mensaje: 'Usuario eliminado', resultado: profesionales};

    }
    else{

        respuesta = {error: true, codigo: 200, 
            mensaje: 'El usuario no existe', resultado: profesionales};

    }

    response.send( respuesta );

}


module.exports = {getStart, getProfesionales, getProfesionalesParams, postProfesionales, putProfesionales, deleteProfesionales}
