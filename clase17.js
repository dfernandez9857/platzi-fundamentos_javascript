const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const peopleId = prompt("Escoje a tu personaje : ");
const lukeURL = `${API_URL}${PEOPLE_URL.replace(':id',peopleId)}`;
const opts = { crossDomain : true };

const onPeopleResponse = (persona) => {
    console.log(`Hola yo soy, ${persona.name}`);
    document.write(`Hola yo soy, ${persona.name}`);
}


//$.get(lukeURL , opts, (data) => console.log(`Hola yo soy, ${data.name}`) );
// $.get(lukeURL , opts, data => console.log(`Hola yo soy, ${data.name}`) );
$.get(lukeURL , opts, onPeopleResponse );
// $.get(lukeURL , opts, function(data){
//     console.log(`Hola yo soy, ${data.name}`);
// })