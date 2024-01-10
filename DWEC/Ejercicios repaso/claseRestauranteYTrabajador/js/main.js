class Trabajador {
    constructor(nombre, numHorasSemanales, salarioPorHora){
        this.nombre=nombre;
        this.numHorasSemanales=numHorasSemanales;
        this.salarioPorHora=salarioPorHora;
    }

    pintaInfo(indice){
        console.log("Trabajador "+(indice+1)+", nombre: "+this.nombre+" numero de horas semanales: "+this.numHorasSemanales+", salario por hora: "+this.salarioPorHora);
    }

    getSaldoSemanal(){
        return this.numHorasSemanales*this.salarioPorHora;
    }
}

class Restaurante{
    constructor(nombre){
        this.nombre=nombre;
        this.trabajadores=[];
    }

    anadirTrabajador(trabajador){
        this.trabajadores.push(trabajador);
    }

    pintaInfo(){
        console.log("Restaurante "+this.nombre);
        this.trabajadores.forEach((trabajador, indice)=>{
            trabajador.pintaInfo(indice);
        });
        
    }

    getPagosSemanales(){
        let dineroTotal=0;
        this.trabajadores.forEach((trabajador)=>{
            dineroTotal=dineroTotal+(trabajador.getSaldoSemanal());
        });
        return(dineroTotal);
    }
}

let restaurante=new Restaurante("Pollos Hermanos");
restaurante.pintaInfo();

restaurante.anadirTrabajador(new Trabajador("Pepe", 40, 10));
restaurante.anadirTrabajador(new Trabajador("Ana", 35, 15));
restaurante.anadirTrabajador(new Trabajador("Marcos", 20, 10));

restaurante.pintaInfo();
console.log("Los trabajadores cuestan: "+restaurante.getPagosSemanales()+"€ a la semana")