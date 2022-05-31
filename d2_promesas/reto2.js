// const { writeFile, readFile } = require("fs");
const fs = require("fs/promises");


let persona = {
    "name": "Andrés",
    "surname": "Cedeño",
    "age": "30"
}

let persona2 = {
    name: 'Andres',
    lastname: 'Cedeño',
    age: 30
}

let asyncFunction = async () => {

    try {

        await fs.writeFile('persona.json',  JSON.stringify( persona2 ));

        const personaObject = await fs.readFile('persona.json', 'utf-8');

        console.log( JSON.parse(personaObject) );

        
    } catch (error) {
        console.log( error );
    }

}

asyncFunction();

/******************************************** */


fs.writeFile('persona.json',  JSON.stringify( persona2 ))
.then( () => {
    return fs.readFile('persona.json', 'utf-8');
})
.then( data => {
    console.log( JSON.parse(data) );
})
.catch( err => {
    console.log( err );
})




