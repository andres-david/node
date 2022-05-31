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



















