class Persona{

    constructor(nombre, apellido, edad){        
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        
    }
    saludar(fn){
        console.log(`Hola me llamo ${this.nombre}`);

        if(fn){
            fn(this.nombre, this.apellido)
        }
    }
    soyViejo() {
        return  this.edad > 20 ? true : false;
    }
}


class  Desarrollador extends Persona {

    constructor(nombre, apellido, lenguaje){
       super (nombre,apellido);
       this.lenguaje = lenguaje;
    }
    // constructor(nombre,apellido){
    //     this.nombre = nombre;
    //     this.apellido = apellido;
    // }
    saludar(fn){
        console.log(`Hola soy desarrollador y me llamo ${this.nombre} y domino el lenguaje ${this.lenguaje}`);
    
        if(fn){
            fn(this.nombre, this.apellido, true)
        }
    }


}

function responderSaludo(nombre,apellido,esDev){
    console.log(`Buen día ${nombre} ${apellido} `);
    
    if(esDev){
        console.log(`Ah mira no sabía que eras dev`);
    }
}

var diego =  new Persona('Diego','Fernandez',24);
var juana =  new Desarrollador('Juana','Barba','c#');

diego.saludar(responderSaludo);
juana.saludar(responderSaludo);










class Auto{
    constructor(marca, año,puertas){
        this.marca = marca 
        this.año = año,
        this.puertas = puertas
        this.llantas;
    }
    arrancar(){
        console.log(`Arrancando auto ${this.marca} del año ${this.año} con ${this.puertas} ${(this.puertas=1,'puerta','puertas')}.`);
    }
    aumetarpuertas(){
        this.puertas++;
        console.log(`Se aumento el numero de puertas : ${this.puertas} puertas}.`)
    }
    aumentarllantas(fn){
        if(fn){
            this.llantas += fn(2);
        }
    }

    static sonarTimbre(sonido){
        console.log(`El timbre sonará : ${sonido}`);
    }
}

class AutoChevrolet extends Auto{
    constructor(marca,modelo){
        super(marca)
        this.año = 2017
        this.motor = 'R455'
        this.modelo = modelo
    }

    arrancar_chev() {
        console.log('Chevrolet arrancado');
        super.arrancar();
    }

    static sonarTimbre(sonido){
        super.sonarTimbre(sonido);
        console.log(`El timbre  del chevrolet : ${sonido}`);
    }
}

var auto =  new Auto('Nissan',2019,4)
var auto_chev  =  new AutoChevrolet('Chevrolet','Sail');


function aumentarLLantas(llantas_aumentar){
    return llantas_aumentar*2;
}









