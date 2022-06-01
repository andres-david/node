let writeAndRead = require('./writeAndReadObject');
let readConsole = require('./readConsole');

let path = 'persona.json'

<<<<<<< HEAD
readConsole.readConsole( (persona) => {

    writeAndRead.writeAndRead(path, persona);

})
=======
let readAsync = async ( ) => {

    let obj = await readConsole.readConsoleAsync( );

    await writeAndRead.writeAndReadAsync( path, obj);

}

// readAsync();


readConsole.readConsole()
.then( ( response ) => {
    writeAndRead.writeAndRead( path, response)
})
.catch( err => {
    console.log( err );
})




>>>>>>> dia2
