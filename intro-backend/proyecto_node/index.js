let writeAndRead = require('./writeAndReadObject');
let readConsole = require('./readConsole');

let path = 'persona.json'

readConsole.readConsole( (persona) => {

    writeAndRead.writeAndRead(path, persona);

})