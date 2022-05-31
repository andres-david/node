const { writeFile, readFile } = require("fs");

let writeAndRead = ( path, obj ) => {

    writeFile( path,  JSON.stringify( obj ), err => {
        if( err ){
            console.log( err );
        }
    } );


    readFile('persona.json', 'utf-8', (err, data) => {

        if (err) {
            console.error(err);
            return;
        }
        console.log( data );

    });

}


module.exports = {
    writeAndRead
}