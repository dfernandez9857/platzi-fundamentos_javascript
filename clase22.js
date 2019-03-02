const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain : true };



var ids = [1,2,3,4,5,6,7];

var promises = ids.map(x=>obtenerPersonaje(x));



Promise.all(promises)
    .then(personajes =>{
        personajes.map(personaje=>console.log(`Mi nombre es ${personaje.name}`))
        console.log(personajes);
    })
    .catch(onError)


function onError(id){
    console.log(`Ocurrio un error en el id ${id}`);
}

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

