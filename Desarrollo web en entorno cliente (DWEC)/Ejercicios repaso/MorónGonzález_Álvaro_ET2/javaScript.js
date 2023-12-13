//Ejercicio1----------

let funcionCadena=function (cadena1, cadena2){
    if(typeof cadena1 !="string" || typeof cadena2 !="string"){
        console.log("Error, alguno de los dos elementos no es una cadena");
    }else {
        if(cadena1.length>cadena2.length){
            return cadena1
        }else{
            return cadena2
        }
    }
    
}

let cadena1="Esta cadena es corta";
let cadena2="Esta cadena es un poco mas larga";

console.log(funcionCadena(cadena1, cadena2));

//Ejercicio2----------

function cadenalreves(cadena){
    let reves=cadena.split("");
    return reves.reverse().join("");
}

function compruebaCadenas(cadena3, cadena4){
    if(typeof cadena3!="string" || typeof cadena4!="string"){
        console.log("Error, algun parámetro no es una cadena");
    }else{
        if(cadenalreves(cadena3)==cadena4 || cadenalreves(cadena4)==cadena3){
            console.log("Una cadena es igual a la otra al reves!")
        }else{
            console.log("Ninguna cadena es igual a la otra al reves")
        }
    }
}

let cadena3=1;
let cadena4="hola";

compruebaCadenas(cadena3, cadena4)

//Ejercicio3----------

let contador=0;

function evaluaArray(array){
    for(let i in array){
        if(typeof array[i]=="number"){
            contador+=1;
            console.log(array[i])
        }
    }
    console.log("Hay "+contador+" números en el array");
    contador=0;

    for(let a in array){
        if(typeof array[a]=="string"){
            contador+=1;
            console.log(array[a])
        }
    }
    console.log("Hay "+contador+" strings en el array");
    contador=0;

    for(let x in array){
        if(typeof array[x]!="string" && typeof array[x]!="number"){
            contador+=1;
            console.log(array[x])
        }
    }
    console.log("Hay "+contador+" elementos que no son strings ni números en el array");
}
let array1=[10, "hola", "alvaro", 6, 73];
let array2=["pepe", "hola", "alvaro", 412, 3];

evaluaArray(array1);
evaluaArray(array2);

//Ejercicio4----------

function conversion(producto="Producto genérico", precio=100, impuestos=21){
   
    console.log("El producto es "+producto+" el precio es "+precio+" y su impuesto es "+impuestos);
}

conversion("asd",);
conversion("asd", +true);
conversion("asd", +true, +false);
conversion("asd", +true, 23);
conversion(null, +true, 23);

//Ejercicio5----------

let array3=["Pepe", "Alvaro", "Roberto", "Natalia"];

array3.sort();
console.log(array3);


let array4=[5, 12, 34, 1, 9, 100];

console.log(array4.sort((a, b)=>a-b));

//Ejercicio6----------

let array5=['Álvaro', 6, 32, true];//Creo el array
console.log(array5.join("#"));

array5.unshift(12, 'Miguel'); //Añado 2 valores al inicio
console.log(array5.join("#"));

array5.push("Sara", 112, false);//Añado 3 valores al final
console.log(array5.join("#"));

array5.splice(3, 3);//Elimino las posiciones 3, 4 y 5
console.log(array5.join("#"));

array5.splice(4, 0,[18, 22]);//Añado dos elementos antes de la última posición
console.log(array5.join("#"));

//Ejercicio7----------

let array6=[10, 12, 14, 6, 7];
console.log(array6.join());

array6.every(num=>num%2==0)===true ? console.log("Todos los elementos del array son pares.") : console.log("NO todos los elementos del array son pares.")

let array7=[10, 12, 14, 6];
console.log(array7.join());

array7.every(num=>num%2==0)===true ? console.log("Todos los elementos del array son pares.") : console.log("NO todos los elementos del array son pares.")

//Ejercicio8----------

let contadorNumeros=0;
let contadorPares=0;

function procesarArray (array){
    for(let i=0;i<array.length;i++){
        typeof array[i] == 'number' ? contadorNumeros+=1 : console.log()
    }

    if (contadorNumeros==array.length){
        for(let a=0;a<array.length;a++){
            array[a]=array[a]*2;

            if(array[a]%2==0){
                contadorPares+=1;
            }
        }
        contadorPares==array.length ? alert("Éxito") : alert("Error");

    }else{
        alert("Error");
    }

};

let array=[12, 45, 32, 467];
procesarArray(array);


//Ejercicio9-------------

class platoCocina{
    constructor(nombrePlato, duracionMinutos, dificultad){
        this.nombrePlato=nombrePlato;
        this.duracionMinutos=duracionMinutos;
        this.dificultad=dificultad;
    }
    toString(){
        return "El plato "+this.nombrePlato+" tiene una duración de "+this.duracionMinutos+" minutos con dificultad "+this.dificultad
    }
}
let plato1 = new platoCocina("tortilla francesa", 5, 1);
let plato2 = new platoCocina("macarrones", 15, 2);
let plato3 = new platoCocina("patatas fritas", 10, 1);


let ingr1=["Huevos", "sal", "aceite"];
let ingr2=["macarrones", "tomate", "queso"];
let ingr3=["patatas", "sal", "aceite"];


    let mapa = new Map();
mapa.set(plato1, [ingr1]);
mapa.set(plato2, [ingr2]);
mapa.set(plato3, [ingr3]);

function platosIngredientes(){

    for(let [platoCocina, arrayplatos] of mapa){
        console.log(platoCocina.toString()+"\n"+"Ingredientes: "+arrayplatos.join("")+"\n");
    }
}

platosIngredientes();