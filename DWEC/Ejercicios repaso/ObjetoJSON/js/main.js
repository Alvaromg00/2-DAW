//Creo el objeto discoMusica con sus atributos
let discoMusica={
    titulo: "Thriller",
    autor: "Michael Jackson",
    añoPublicacion: 1982,
    numVentas: 66000000,
    //Método getInfo
    getInfo(){
        return "-Disco de música-\n"+"Nombre del disco: "+this.titulo+"\nAutor: "+this.autor+"\nAño de publicación: "+this.añoPublicacion+"\nNúmero de ventas: "+this.numVentas
    }
};
//Saco por consola la función getInfo
console.log(discoMusica.getInfo());

//Creo el objeto calle con sus atributos
let calle={
    nombre: "Sunset Boulevard",
    longitud: 35,
    establecimientos: [
        {
            establecimiento1: "Fred Segal(ropa)"
        },
        {
            establecimiento2: "The Give Store(regalos)"
        },
        {
            establecimiento3: "7-Eleven(alimentación)"
        }
    ],
    //Método getInfo
    getInfo(){
        return "-Calle-\n"+"Nombre de la calle: "+this.nombre+"\nLongitud: "+this.longitud+"km\nEstablecimientos: "+this.establecimientos[0].establecimiento1 + ", " +this.establecimientos[1].establecimiento2 + " y " +this.establecimientos[2].establecimiento3;
    }
};
//Saco por consola la función getInfo
console.log(calle.getInfo());

//Creo el objeto coche con sus atributos
let coche={
    modelo: "Mercedes AMG-GT",
    dueño: {
        nombre: "Carlos",
        edad: 33
    },
    marca: {
        nombre: "Mercedes",
        creacion: 1998
    },
    
    //Método getInfo
    getInfo(){
        return "-Coche-\n"+"Modelo del coche: "+this.modelo+"\nNombre del dueño: "+this.dueño.nombre+"\nEdad: "+this.dueño.edad+"\nNombre de la marca: "+this.marca.nombre+"\nAño de creación de la marca: "+this.marca.creacion
    }
};
//Saco por consola la función getInfo
console.log(coche.getInfo());

//Creo el objeto obra con sus atributos
let obra={
    titulo: "El rey león",
    estreno: "20 de Octubre de 2011",
    director:{
        nombre: "Zenón",
        apellidos: "Recalde",
        nacimiento: 1974,
        obras:[
            {
                obra1: "Tres, dos, tuno",
                obra2: "Y mi mamá también",
                obra3: "Asesina como puedas"
            }
        ]
    },
    actores:[
        {
            nombre: "David Comrie",
            edad: 39,
            numRepresentaciones: 12
        },
        {
            nombre: "Daniela Pobega",
            edad: 42,
            numRepresentaciones: 17
        },
        {
            nombre: "Brenda Mhlongo",
            edad: 36,
            numRepresentaciones: 20
        }
    ],
    
    //Método getInfo
    getInfo(){
        return "-Obra de teatro-\nTítulo: "+this.titulo+"\nFecha de estreno: "+this.estreno+"\nDirector: "+this.director.nombre+"\nApellido: "+this.director.apellidos+"\nObras del director:\n"+this.director.obras[0].obra1+"\n"+this.director.obras[0].obra2+"\n"+this.director.obras[0].obra3+"\nActores del Rey León:\n"+this.actores[0].nombre+", edad: "+this.actores[0].edad+" y "+this.actores[0].numRepresentaciones+" representaciones\n"+this.actores[1].nombre+", edad: "+this.actores[1].edad+" y "+this.actores[1].numRepresentaciones+" representaciones\n"+this.actores[2].nombre+", edad: "+this.actores[2].edad+" y "+this.actores[2].numRepresentaciones+" representaciones\n"
    }
};
//Saco por consola la función getInfo
console.log(obra.getInfo());