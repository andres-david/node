const { writeFileSync, readFile } = require("fs");
const { json } = require("stream/consumers");

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

writeFileSync('persona.json',  JSON.stringify( persona2 ) );


readFile('persona.json', 'utf-8', (err, data) => {

    if (err) {
        console.error(err);
        return;
      }
      console.log( data );

});



