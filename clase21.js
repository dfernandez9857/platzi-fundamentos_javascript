const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain : true };


function obtenerPersonaje(id){

    return new Promise((resolve,reject)=>{

        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

        $.get(url , opts,function(data){
            resolve(data)
        }).fail(function(){
            reject(id)
        })

    });
    
}

obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2);
    })
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3);
    })
    .then(personaje => {
        console.log(`El personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(4);
    })
    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`)        
    })
    .catch(onError)

function onError(id){
    console.log(`Ocurrio un error en el id ${id}`);
}

function obtenerSuma(x,y){
    return new Promise(function(resolve,reject){
        console.log('Procesando...')
        resolve(x+y);
        reject('Ocurrio un error');
    });
}


// obtenerSuma(2,3)
//     .then(resultado=>{
//         console.log(`El resultado es :  ${resultado}`);
//         return obtenerSuma(4,40);
//     })
//     .then(resultado=>{
//         console.log(`El resultado es :  ${resultado}`);
//         return obtenerSuma(455,6640);
//     })
//     .then(resultado=>{
//         console.log(`El resultado es :  ${resultado}`);
        
//     })
//     .catch(error=>console.log(error))




