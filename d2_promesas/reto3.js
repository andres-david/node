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

<<<<<<< HEAD
pregunta('Edad: ')



rl.question ('Name: ', response => {
    persona.name = response;
    
    rl.question ('Surname: ', response => {
        persona.surname = response;

        rl.question ('Age: ', response => {
            persona.age = response;
            writeFile('persona.json',  JSON.stringify( persona ), err => {
                console.log( err );
            });
            
            readFile('persona.json', 'utf-8', (err, data) => {
            
                if (err) {
                    console.error(err);
                    return;
                }
                
                console.log( data );

                process.exit();
            
            });

        });
    
    });

});
=======
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







>>>>>>> dia2



















