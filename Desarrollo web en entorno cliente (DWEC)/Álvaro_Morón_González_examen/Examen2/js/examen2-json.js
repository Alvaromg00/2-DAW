'use strict';

//Crea el siguiente objeto usando JSON:

/*
Un plato que tiene un nombre (cadena), una duración (número),
una dificultad (cadena) y una serie de ingredientes (array de objetos).

Cada ingrediente tiene un nombre de ingrediente (cadena), una unidad de medida(cadena) y una cantidad (número).
Debe haber al menos 3 ingredientes en el plato.

Un ejemplo de ingrediente puede ser: Aceite (nombre) 1 (cantidad) cucharada (unidad de medida).

 */

//creo el objeto plato con sus atributos
let plato = {
    nombre:"Cocido extremeño",
    duracion: 45,
    dificultad: "Media/Baja",
    ingredientes:[
        {
            nombre: "Garbanzos",
            unidadMedida: "Gramo/s",
            cantidad: 400
        },
        {
            nombre: "Chorizo",
            unidadMedida: "Pieza/s",
            cantidad: 1
        },
        {
            nombre: "Patata",
            unidadMedida: "Unidade/s",
            cantidad: 1
        },
        {
            nombre: "Aceite",
            unidadMedida: "Cucharada/s",
            cantidad: 2
        },
    ],
    //Método getInfo, saca por consola toda la información del objeto plato
    getInfo(){
        console.log( "Nombre del plato: "+this.nombre+"\n        Duración: (minutos): "+this.duracion+"\n        Dificultad: "+this.dificultad+"\n        Listado de ingredientes:"+"\n- "+this.ingredientes[0].nombre+" : "+this.ingredientes[0].cantidad+" "+this.ingredientes[0].unidadMedida+"\n- "+this.ingredientes[1].nombre+" : "+this.ingredientes[1].cantidad+" "+this.ingredientes[1].unidadMedida+"\n- "+this.ingredientes[2].nombre+" : "+this.ingredientes[2].cantidad+" "+this.ingredientes[2].unidadMedida+"\n- "+this.ingredientes[3].nombre+" : "+this.ingredientes[3].cantidad+" "+this.ingredientes[3].unidadMedida);
    }
};

//llamo a la función getInfo
plato.getInfo();