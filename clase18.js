const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain : true };

const onPeopleResponse = (persona) => {
    console.log(persona);
    console.log(`Hola yo soy, ${persona.name}`);
    document.write(`Hola yo soy, ${persona.name}<br/>`);
}


function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get(url , opts, onPeopleResponse );   
}


obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4);

