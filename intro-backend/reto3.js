const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

const { writeFileSync, readFile } = require("fs");

let persona = {
    name: "",
    surname: "",
    age: ""
}



rl.question ('Name: ', response => {
    persona.name = response;
    
    rl.question ('Surname: ', response => {
        persona.surname = response;

        rl.question ('Age: ', response => {
            persona.age = response;
            writeFileSync('persona.json',  JSON.stringify( persona ) );
            
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



















