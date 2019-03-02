function Persona(nombre, apellido,edad){
    this.apellido = apellido;
    this.nombre = nombre;
    this.edad = edad,
    this.mayoriaEdad = function(){
       (this.edad>=18)? true : false;
    }
    return this;
}

function Auto(marca,año){
    this.marcaa = marca;
    this.año = año;
    return this;
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
}

Auto.prototype.viejo = function() {
    console.log(`El auto es del año ${ this.año }, por lo tanto ${ this.año > 2010 ? 'es viejo' : 'es nuevo' }`);
}


var diego =  new Persona('Diego','Fernandez',24);

var chevrolet =  new Auto('Sail', 2017);

diego.saludar();
chevrolet.viejo();
new Auto('Nissan',2007).viejo();