class Ciclomotor{
    constructor(marca, aceleracion, desaceleracion){
        this.numRuedas=2;
        this.velocidadMaxima=120;
        this.velocidadActual=0;
        this.marca=marca;
        this.aceleracion=aceleracion;
        this.desaceleracion=desaceleracion;
        this.encendida=false;
    }

    arrancar(){
        this.encendida=true;
        console.log("Se mete y gira la llave, la moto arranca");
    }

    acelerar(){
        if(this.encendida===true){
            this.velocidadActual=Math.min(this.velocidadActual+this.aceleracion, this.velocidadMaxima);
        }
    }

    frenar(){
        this.velocidadActual=Math.max(this.velocidadActual-this.desaceleracion, 0)
    }

    mostrarInfo(){
        console.log("------"+this.marca+"-------");
        console.log("Número de ruedas: "+this.numRuedas);
        console.log("Velocidad máxima: "+this.velocidadMaxima+"km");
        console.log("Velocidad actual: "+this.velocidadActual+"km");
        console.log("Aceleración: "+this.aceleracion);
        console.log("Desaceleración: "+this.desaceleracion);
        console.log("Arrancada: "+(this.encendida ? "si" : "no"));
    }
}

let ciclomotor=new Ciclomotor("Yamaha", 80, 10);
console.log("La moto inicialmente:");
ciclomotor.mostrarInfo();
console.log("La moto tras acelerar:");
ciclomotor.acelerar();
ciclomotor.mostrarInfo();

console.log("La moto tras arrancarla y acelerar:");
ciclomotor.arrancar();
ciclomotor.acelerar();
ciclomotor.mostrarInfo();

console.log("Frenamos la moto:");
ciclomotor.frenar();
ciclomotor.mostrarInfo();

class Motocross extends Ciclomotor{
    constructor(marca, aceleracion, desaceleracion){
        super(marca, aceleracion, desaceleracion);
        this.velocidadMaxima=90;
        this.marchaActual=0;
    }

    arrancar(){
        console.log("Se levanta la pata de cabra.");
        super.arrancar();
    }

    acelerar(){
        super.acelerar();
        this.ajustarMarcha();
    }

    frenar(){
        super.frenar();
        this.ajustarMarcha();
    }

    ajustarMarcha(){
        if(this.velocidadActual===0){
            this.marchaActual=0;
        }else if(this.velocidadActual>0 && this.velocidadActual<=10){
            this.marchaActual=1;
        }else if(this.velocidadActual>10 && this.velocidadActual<=30){
            this.marchaActual=2;
        }else{
            this.marchaActual=3;
        }
    }

    mostrarInfo(){
        super.mostrarInfo();
        console.log("Marcha actual: "+this.marchaActual);
    }

}

console.log("\n\nPruebas de la moto de motocross\n\n");

let motoMotoCross=new Motocross("Honda", 10, 5);
console.log("La moto de motocross inicialmente: ");
motoMotoCross.mostrarInfo();

console.log("La moto tras acelerar:");
motoMotoCross.acelerar();
motoMotoCross.mostrarInfo();

console.log("La moto tras arrancarla y acelerar:");
motoMotoCross.arrancar();
motoMotoCross.acelerar();
motoMotoCross.mostrarInfo();

console.log("Volvemos a acelerar:");
motoMotoCross.acelerar();
motoMotoCross.mostrarInfo();

console.log("Frenamos la moto:");
motoMotoCross.frenar();
motoMotoCross.mostrarInfo();

class Scooter extends Ciclomotor{
    constructor(marca){
        super(marca);
        this.aceleracion=25;
        this.desaceleracion=15;
    }

    arrancar(){
        this.encendida=true;
        console.log("Se acerca la llave y se pulsa el botón, la moto arranca");
    }
}

console.log("Pruebas de la Scooter: ");
let scooter=new Scooter("Yamaha");
console.log("La moto Scooter inicialmente: ");
scooter.mostrarInfo();

console.log("La moto tras acelerar:");
scooter.acelerar();
scooter.mostrarInfo();

console.log("La moto tras arrancarla y acelerar:");
scooter.arrancar();
scooter.acelerar();
scooter.mostrarInfo();

console.log("Volvemos a acelerar:");
scooter.acelerar();
scooter.mostrarInfo();

console.log("Frenamos la moto:");
scooter.frenar();
scooter.mostrarInfo();