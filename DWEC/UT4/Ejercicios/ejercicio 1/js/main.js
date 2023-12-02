var persona={
    nombre:"Marta",
    "edad": 23,
    trabajos: [
        {
            descripcion: "Payasos del circo",
            duracion: "2003-2005"
        },
        {
            descripcion:"Sexador de pollos",
            duracion:"2005-2019"
        }
    ],
    getInfo(){
        return "Mi nombre es "+this.nombre+" y tengo "+this.edad
    }
}

persona.getInfo=function(){
    let cadenaDeVuelta="Mi nombre es "+this.nombre+" y tengo "+this.edad+"\n";
    this.trabajos.forEach(elemento => {
        cadenaDeVuelta+="-"+elemento.descripcion+" -->"+elemento.duracion+"\n"
    });
        
    return cadenaDeVuelta;
}

console.log(persona.getInfo());