const readline = require('readline');

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


let readConsole = () => {

    let promesa = new Promise( (resolve, reject) => {

        let persona = {
            name: "",
            surname: "",
            age: ""
        }
        
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
            persona.age = response;

            resolve( persona );
    
        })
        .catch( err => {
            reject ( err );
        })

    })

    return promesa;

}


let readConsoleAsync = async ( ) => {

    let persona = {
        name: "",
        surname: "",
        age: ""
    }

    try {

        persona.name    = await pregunta( 'Name: ' );
        persona.surname = await pregunta( 'Surname: ' );
        persona.age     = await pregunta( 'Age: ' );

        await fs.writeFile('persona.json',  JSON.stringify( persona ));

        const personaObject = await fs.readFile('persona.json', 'utf-8');

        console.log( JSON.parse(personaObject) );

        return persona;


    } catch (error) {

        console.log( error );
        
    }

}

module.exports = {
    readConsole,
    readConsoleAsync
}