
var diego = {
    nombre : 'Diego',
    apellido : 'Fernández',
    edad : 24
}


function imprimirNombreEnMayusculas(persona){
    //var nombre  = persona.nombre
    var { nombre }  =  persona;
    console.log(nombre.toUpperCase());
}


function imprimirNombreYEdad({nombre, edad}){
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

function imprimirNombreYApellido(persona){
    var {nombre}  = persona;
    var {apellido} = persona;
    console.log(`Hola mi nombre es ${nombre} ${apellido} y soy estudiante de Platzi`);

}

function cumpleaños(persona){
    return {
        ...persona,
        edad : persona.edad+1
    }

}
console.log(diego);

cumpleaños(diego);

imprimirNombreEnMayusculas(diego);
imprimirNombreYEdad(diego);
imprimirNombreYApellido(diego);
