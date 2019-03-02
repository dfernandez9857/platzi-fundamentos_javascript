function heredaDe(prototipoHijo,prototipoPadre){

    var fn = function(){}
    fn.prototype = prototipoPadre.prototype;  
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo    

}


function Persona(nombre, apellido,edad){
    this.apellido = apellido;
    this.nombre = nombre;
    this.edad = edad;
    return this;
}

function Desarrollador(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    return this;
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
}

Persona.prototype.soyViejo = function () {
    console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
}

heredaDe(Desarrollador,Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola soy desarrollador y me llamo ${this.nombre}`);
}



var diego =  new Persona('Diego','Fernandez',24);
var juana =  new Desarrollador('Juana','Barba');

diego.saludar();