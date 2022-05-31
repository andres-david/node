const { writeFile, readFile } = require("fs");

let writeAndRead = ( path, obj ) => {

    writeFile( path,  JSON.stringify( obj ))
    .then( () => {
        return readFile(path, 'utf-8');
    })
    .then( data => {
        console.log( JSON.parse( data ) );
    })
    .catch( err => {
        console.log( err );
    })

}


/********************************************* */


let writeAndReadAsync = async ( path, obj ) => {

    try {

        await writeFile( path,  JSON.stringify( obj ));

        let data = await fs.readFile('persona.json', 'utf-8');

        console.log( data );
        
    } catch (error) {

        console.log( error );
        
    }

}


module.exports = {
    writeAndRead,
    writeAndReadAsync
}