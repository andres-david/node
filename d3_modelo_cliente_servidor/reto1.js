const http = require('http');


const server = http.createServer( (request, response) => {

    console.log('Request received from client');
    console.log('http', request.url);
    console.log('method', request.method);
    console.log( request.headers['content-type'] );
    console.log( request.headers['user-agent']);
    console.log( request.headers['content-length'] );

    response.writeHead(200, {'Content-Type': 'application/json'});
    if( request.url == '/bye' ){

        let objeto = {
            ok: true,
            message: 'Adios'
        }

        response.write(JSON.stringify( objeto ));
    }
    else{

        let objeto = {
            ok: true,
            message: 'Recibido'
        }

        response.write(JSON.stringify( objeto ));

    }

    response.end();
    
});

server.listen(3000);