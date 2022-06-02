
const { Agent } = require("http");
const { Professional } = require("../models/claseProfesional");

let profesional = null;

function getStart( request, response ){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send( respuesta );
}

function getProfesional( request, response ){

    let respuesta;
    
    if( profesional != null ){
        respuesta = profesional;
    }
    else{
        respuesta = { error: true, codigo: 200, mensaje: "El usuario no existe" }
    }

    response.send( respuesta );
}

function postProfesional( request, response ){

    let respuesta;

    console.log( request.body )
    
    if( profesional === null ){
        
        profesional = new Professional( "Andrés", 30, "M", 60, 1.70 );
        
        respuesta = {error: false, codigo: 200,
                    mensaje: 'Usuario creado', resultado: profesional};

    }
    else{

        respuesta = {error: true, codigo: 200,
                    mensaje: 'Usuario ya existente', resultado: null }

    }

    response.send( respuesta )

}

function putProfesional( request, response ){

    let respuesta;

    if( profesional != null ){

        profesional.name   = request.body.name;
        profesional.age    = request.body.age;
        profesional.genre  = request.body.genre;
        profesional.weight = request.body.weight;
        profesional.height = request.body.height;
        respuesta = {error: false, codigo: 200, 
                    mensaje: 'Usuario actualizado', resultado: profesional};

    }
    else{
        respuesta = { error: true, codigo: 200, 
                    mensaje: 'El usuario no existe', resultado: profesional}
    }

    response.send( respuesta )

}

function deleteProfesional( request, response ){

    let respuesta;

    if( profesional != null ){

        profesional = null;
        respuesta = {error: false, codigo: 200, 
                    mensaje: 'Usuario eliminado', resultado: profesional};

    }
    else{
        respuesta = {error: true, codigo: 200,
                    mensaje: 'El usuario no existe', resultado: profesional}
    }
    
    response.send( respuesta );
}


module.exports = {getStart, getProfesional, postProfesional, putProfesional, deleteProfesional}