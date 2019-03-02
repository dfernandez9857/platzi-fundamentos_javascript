
var diego = {
    nombre : 'Diego',
    apellidos : 'Fernández',
    edad : 24
}


function imprimirNombreEnMayusculas({nombre}){
    console.log(nombre.toUpperCase());
}

function imprimirNombreEnMayusculas2(persona){
    console.log(persona.nombre.toUpperCase());
}

imprimirNombreEnMayusculas(diego);

imprimirNombreEnMayusculas({nombre : 'Camila'});


imprimirNombreEnMayusculas2({nombre : 'Juanito'});
