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

    
    $.get(url , opts, function(persona,status) {
        
        console.log(status);

        var p ={
            ...persona,
            birth_year : persona.birth_year + 1000,
        }
        console.log(`Mi id es ${id}`);
        console.log(persona);
        console.log(`Hola yo soy, ${persona.name}`);
        console.log(`y mi edad es, ${p.birth_year}`);
        document.write(`Hola yo soy, ${persona.name}<br/>`);

        if(callback){
            callback();
        }

    }).fail(function(){
        console.log(arguments);
    });  
    
    
}

obtenerPersonaje(1, () => 
    obtenerPersonaje(2, () =>
        obtenerPersonaje(3, ()=>
            obtenerPersonaje(4)
            )
        ) 
    );


