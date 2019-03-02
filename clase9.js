
var diego = {
    nombre : 'Diego',
    apellido : 'Fernández',
    edad : 24
}



var juana = {
    nombre : 'Juana',
    apellido : 'Martinez',
    edad : 10
}

var carlos = {
    nombre : 'Carlos',
    apellido : 'Santander',
    edad : 20
}


var array  =  [carlos, juana,diego];


for(var i = 0; i <array.length;i++){
    
    var persona = array[i];

    console.log(`Hola me llamo ${persona.nombre} ${persona.apellido} y tengo solo ${persona.edad} años.`);

}

