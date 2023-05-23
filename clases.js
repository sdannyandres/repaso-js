class Coche {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad= antiguedad;
    }
    aumentarVelocidad(){
    this.velocidad = this.velocidad + 5;
    }
    reducirVelocidad(){
        this.velocidad -= 1;
    }
}


var coche1 = new Coche('bmw',200,2017)
var coche2 = new Coche('audi',200,2017)
var coche3 = new Coche('mercedes',200,2017)
var coche4 = new Coche('toyota',200,2017)

console.log(coche1)