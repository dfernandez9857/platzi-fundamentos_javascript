
var diego = {
    nombre : 'Diego',
    apellido : 'Fernández',
    edad : 24,
    altura : 1.80
}



var juana = {
    nombre : 'Juana',
    apellido : 'Martinez',
    edad : 21,
    altura : 1.70
}

var carlos = {
    nombre : 'Carlos',
    apellido : 'Santander',
    edad : 18,
    altura : 1.60
}


var array  =  [carlos, juana,diego];
const ARRAY_TAMANO = array.length;

for(var i = 0; i < ARRAY_TAMANO ;i++){
    
    var persona = array[i];

    console.log(`Hola me llamo ${persona.nombre} ${persona.apellido} y tengo solo ${persona.edad} años.`);

}


const filtroEdad = persona => persona.edad > 20;

const filtroAltura = ({ altura }) => altura > 1.70;


const filtroEdadYNombre = persona => {
   return  persona.edad > 20 && persona.nombre ==="Diego";
}


var filtradoEdad = array.filter(filtroEdad);
var filtradoEdadYNombre = array.filter(filtroEdadYNombre);
var filtradoEdadYNombre2 = array.filter(p=> p.edad > 20 && p.nombre ==="Diego");
var filtradoEdadYNombre3 = array.filter(function(p){
    return p.edad > 20 && p.nombre ==="Diego"
});
var filtrandoAltura = array.filter(filtroAltura);
var filtrandoAltura2 = array.filter(({ altura }) => altura > 1.70 );





