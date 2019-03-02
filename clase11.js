
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

//array
var personas  =  [carlos, juana,diego];
const ARRAY_TAMANO = personas.length;

for(var i = 0; i < ARRAY_TAMANO ;i++){
    
    var persona = personas[i];

    console.log(`Hola me llamo ${persona.nombre} ${persona.apellido} y tengo solo ${persona.edad} años.`);

}

//filter
const filtroEdad = persona => persona.edad > 20;

const filtroAltura = ({ altura }) => altura > 1.70;


const filtroEdadYNombre = persona => {
   return  persona.edad > 20 && persona.nombre ==="Diego";
}


var filtradoEdad = personas.filter(filtroEdad);
var filtradoEdadYNombre = personas.filter(filtroEdadYNombre);
var filtradoEdadYNombre2 = personas.filter(p=> p.edad > 20 && p.nombre ==="Diego");
var filtradoEdadYNombre3 = personas.filter(function(p){
    return p.edad > 20 && p.nombre ==="Diego"
});
var filtrandoAltura = personas.filter(filtroAltura);
var filtrandoAltura2 = personas.filter(({ altura }) => altura > 1.70 );



//maps : modificar 

const pasarEdadDias = persona =>{    
    return {
        ...persona,
        edad: persona.edad * 365
    };
}

const pasarEdadDias2 = persona => ({
    ...persona,
    edad:persona.edad*365
})


var personasEdadEnDias = personas.map(pasarEdadDias);
var personasEdadEnDias2 = personas.map(pasarEdadDias2);
var personasEdadEnDias3 = personas.map(function(p){
    return {
        ...persona,
        edad: persona.edad * 365
    };
});
var personasEdadEnDias4 = personas.map(function(p){
    ({
        ...persona,
        edad: persona.edad * 365
    });
});

var personasEdadEnDias5 = personas.map(p=>( { ...p, edad : p.edad * 365 } ));
var personasEdadEnDias6 = personas.map(p=>( { nombre: p.nombre, edad : p.edad * 365 } ));
var personasEdadEnDias7 = personas.map(({edad}) => ({  ...persona ,edad : edad * 365  }) );
var personasEdadEnDias8 = personas.map(({edad, nombre}) => ({  ...persona ,edad : edad * 365, nombre : `Mi nombre es ${nombre}'s`  }) );




