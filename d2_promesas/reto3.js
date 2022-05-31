const readline = require('readline');

// const { writeFile, readFile } = require("fs");

const fs = require("fs/promises");

let persona = {
    name: "",
    surname: "",
    age: ""
}


function pregunta ( pregunta ){
    const question = new Promise(( resolve, reject ) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question( pregunta, ( respuesta ) => {
            resolve( respuesta );
            rl.close();
        });

    });

    return question;

}

// let objetoJs = async () => {

//     try {

//         persona.name    = await pregunta( 'Name: ' );
//         persona.surname = await pregunta( 'Surname: ' );
//         persona.age     = await pregunta( 'Age: ' );

//         await fs.writeFile('persona.json',  JSON.stringify( persona ));

//         const personaObject = await fs.readFile('persona.json', 'utf-8');

//         console.log( JSON.parse(personaObject) );

//     } catch (error) {

//         console.log( error );
        
//     }

// }

// objetoJs();



/**************************************** */


pregunta('Nombre: ')
.then( ( response ) => {
    persona.name = response;
    return pregunta('Surname: ');
})
.then( ( response ) => {
    persona.surname = response;
    return pregunta('Age: ');
})
.then( ( response ) => {
    persona.age = response
    return fs.writeFile('persona.json', JSON.stringify( persona ))
})
.then( () => {
    return fs.readFile('persona.json', 'utf-8');
})
.then( (data) => {
    console.log(data)
})
.catch( err => {
        console.log( err );
})


























