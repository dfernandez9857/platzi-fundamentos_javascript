const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain : true };





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


async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7];

    var promises = ids.map(x=>obtenerPersonaje(x));

    console.log(promises);

    // try {
    //     var personajes = await Promise.all(promises);
    //     console.log(personajes);
    // } catch (error) {
    //     onError(error);
    // }

    
}




async function obtenerPersonajes2(){
    var ids = [1,2,3,4,5,6,7];

    var promises = ids.map(x=>obtenerPersonaje(x));

    var personajes = await Promise.all(promises);
    throw Error('errorcito');

    return personajes;
}

obtenerPersonajes()

obtenerPersonajes2()
    .then(personajes=> console.log(personajes))
    .catch(id => console.log(`Ocurrio un error en id ${id}`));

(async function(){
    var ids = [1,2,3,4,5,6,7];

    var promises = ids.map(x=>obtenerPersonaje(x));

    var personajes = await Promise.all(promises);

    console.log(personajes);
})()