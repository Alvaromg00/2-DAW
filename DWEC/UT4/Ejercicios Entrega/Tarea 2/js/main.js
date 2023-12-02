//Creo la clase Trabajador
class Trabajador{
    //Método constructor
    constructor(nombre, numHorasSemanales, salarioPorHora){
        this.nombre=nombre;
        this.numHorasSemanales=numHorasSemanales;
        this.salarioPorHora=salarioPorHora;
    }
    //Método pintarInfo
    pintarInfo(posicion){
        console.log("Trabajador "+posicion+":\nEl nombre del trabajador es: "+this.nombre+"\nEl número de horas semanales: "+this.numHorasSemanales+"\nEl precio/hora: "+this.salarioPorHora);
    }

    getSaldoSemanal(){
        return this.salarioPorHora*this.numHorasSemanales
    }
}

//Creo la clase Restaurante
class Restaurante{
    //Método constructor
    constructor(nombre){
        this.nombre=nombre;
        this.trabajadores=[];
    }

    //Método anadirTrabajador
    anadirTrabajador(trabajador){
        this.trabajadores.push(trabajador);
    }

    //Método pintarInfo
    pintarInfo(){
        console.log("INFORMACIÓN DEL RESTAURANTE: "+this.nombre); 
        this.trabajadores.forEach((trabajador, indice) => {
            trabajador.pintarInfo(indice);
          });
    }

    //Método getPagosSemanales
    getPagosSemanales(){
        let pagosSemanales=0;
        this.trabajadores.forEach((trabajador) => {
            pagosSemanales += trabajador.getSaldoSemanal();
          });
          return pagosSemanales;
    }
}

let restaurante=new Restaurante("La tapería");
restaurante.pintarInfo();

restaurante.anadirTrabajador(new Trabajador("Pepe", 40, 10));
restaurante.anadirTrabajador(new Trabajador("Laura", 35, 15));
restaurante.anadirTrabajador(new Trabajador("Marcos", 20, 10));
restaurante.pintarInfo();


console.log("Mantener a los trabajadores del restaurante cuesta: "+restaurante.getPagosSemanales()+"€ a la semana");