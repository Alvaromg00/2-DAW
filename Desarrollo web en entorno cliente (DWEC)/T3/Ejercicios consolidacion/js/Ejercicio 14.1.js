let str="ab1c3de4fg";
function separarVocalesConsonantes(cadena){
    let vocales=[];
    let consonantes=[];

    for (let letra of cadena){
        if(/[aeiou]/i.test(letra)){
            vocales.push(letra);
        }else if(/[a-z]/i.test(letra)){
            consonantes.push(letra);
        }
    }
    return{
        vocales: vocales,
        consonantes: consonantes
    };
}
let resultado=separarVocalesConsonantes(str);
console.log("Vocales", resultado.vocales);
console.log("Consonantes", resultado.consonantes);

/*Paso 2*/
let array=[1, 2, "a", "d", "g"];
array.splice(2, 2, "Pepe", 3, "h");
console.log(array.join(", "));


/*Paso 3*/

function ordenaEnteros(int1, int2){
    return int1>int2 ? 1 : int1==int2 ?0:-1;
}
let a3=[20, 6, 100, 51, 28, 9];
a3.sort(ordenaEnteros);
console.log(a3.join(", "));

/* Paso 4*/
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    toString() {
        return this.nombre+" ("+this.edad+")";
    }
}

let personas = [new Persona("Marcos", 33), new Persona("María", 19), new Persona("Santiago", 28), new Persona("Cristina", 40)];

function ordenaPersonas(personas) {
    return personas.sort((a, b) => a.edad - b.edad);
}

ordenaPersonas(personas);
console.log(personas.join(", "))
