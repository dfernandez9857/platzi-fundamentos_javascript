const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain : true };

// const onPeopleResponse = (persona) => {
//     console.log(persona);
//     console.log(`Hola yo soy, ${persona.name}`);
//     document.write(`Hola yo soy, ${persona.name}<br/>`);
// }


function obtenerPersonaje(id,callback){
    
    console.log(id);
    
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

    
    $.get(url , opts,callback).fail(function(){
        console.log("Ocurrio un error");
    });
       
    
}

obtenerPersonaje(1, function(persona){

    console.log(`Hola yo soy, ${persona.name}`);

    obtenerPersonaje(2, function(persona) {
        console.log(`Hola yo soy, ${persona.name}`);

        console.log(arguments);

        obtenerPersonaje(3, function(persona){
            console.log(`Hola yo soy, ${persona.name}`);

            console.log(arguments);

            obtenerPersonaje(4, function(persona){
                console.log(`Hola yo soy, ${persona.name}`);


            });
        })
    }) 
});


