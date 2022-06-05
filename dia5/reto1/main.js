let printTable = ( lista ) => {

    let bodyList = document.querySelector('.body__list');

    bodyList.innerHTML = '';

    document.querySelector('.list__profesionales').style.display = "block";

    let profesional;

    for( let i = 0; i < lista.length ; i++ ){

        profesional = lista[i];

        let tr = `<tr>    
            <td>${profesional.name}</td>
            <td>${profesional.age} </td>
            <td>${profesional.genre}</td>
            <td>${profesional.weight}</td>
            <td>${profesional.height}</td>
        </tr>`;

        bodyList.innerHTML += tr;

    }

}

async function getProfesional(){

    const id  = document.querySelector('#id').value;

    let url   = `http://localhost:3000/profesionales/${id}`;
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        method: "GET"

    }

    try {
        let data = await fetch( url, param );
        let result = await data.json();

        console.log( result );

        printTable( result );
        
    } catch (error) {
        console.log( error );
    }
}

async function postProfesional(){
    
    try {

        let nombre = document.querySelector('#nombre').value;
        let edad   = document.querySelector('#edad').value;
        let genero = document.querySelector('#genero').value;
        let peso   = document.querySelector('#peso').value;
        let altura = document.querySelector('#altura').value;
    
        let nuProfesional = new Professional2( nombre, edad, genero, peso, altura );
    
        console.log(nuProfesional);
    
        let url   = `http://localhost:3000/profesionales`;
    
        let param = {
    
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify( nuProfesional ),
            method: "POST"
    
        }

        let data = await fetch ( url, param );
        let result = await data.json();

        console.log( result );

        printTable( result.resultado );
        
    } catch (error) {
        
        console.log( error );

    }

}


async function putProfesional(){

    try {
        let nombre = document.querySelector('#nombre').value;
        let edad   = document.querySelector('#edad').value;
        let genero = document.querySelector('#genero').value;
        let peso   = document.querySelector('#peso').value;
        let altura = document.querySelector('#altura').value;
        let id     = document.querySelector('#id').value;

        let nuInfo = {
            "name": nombre,
            "age": edad,
            "genre": genero,
            "weight": peso,
            "height": altura,
            "id": id,
        }
    
        let url   = `http://localhost:3000/profesionales`;
    
        let param = {
    
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify( nuInfo ),
            method: "PUT"
    
        }

        console.log( param );

        let data   = await fetch ( url, param );
        let result = await data.json();

        console.log( result );

        printTable( result.resultado );

    } catch (error) {
        
        console.log( error );

    }

}

async function deleteProfesional(){

    try {
        let i = document.getElementById('id').value;

        let indi = {
            "id": i,
        }

        let url   = `http://localhost:3000/profesionales`;
        
        let param = {
            
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify( indi ),
            method: "DELETE"
        }
        
        console.log( param );
        
        let data   = await fetch( url, param );
        let result = await data.json();

        console.log( result );

        printTable( result.resultado );

    } 
    catch (error) {
        
        console.log( error );

    }

}