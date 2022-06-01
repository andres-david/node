const express = require('express');
const app = express();

app.get('/', ( req, res ) => {

    console.log('Request received from client');
    console.log('http', req.url);
    console.log('method', req.method);
    console.log( req.headers['content-type'] );
    console.log( req.headers['user-agent']);
    console.log( req.headers['content-length'] );

    let objeto = {
        ok: true,
        message: 'Recibido'
    }

    res.send(JSON.stringify( objeto ));

    res.end();

});


app.get('/bye', ( req, res ) => {

    console.log('Request received from client');
    console.log('http', req.url);
    console.log('method', req.method);
    console.log( req.headers['content-type'] );
    console.log( req.headers['user-agent']);
    console.log( req.headers['content-length'] );

    let objeto = {
        ok: true,
        message: 'Adios'
    }

    res.send(JSON.stringify( objeto ));
    res.end();

});




app.listen(4000);