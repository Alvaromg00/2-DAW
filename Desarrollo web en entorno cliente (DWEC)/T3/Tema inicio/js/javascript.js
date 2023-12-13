// Prueba 1
let nombre="Álvaro";
console.log(nombre);
console.log(typeof nombre);

var altura = 187;

console.log(altura);
console.log(typeof altura);

altura="Uno con Ochenta y Siete";
console.log(altura);
console.log(typeof altura);

//Prueba 2
let booleano=true;
console.log(booleano);
console.log(typeof booleano);

let frase;
console.log(frase);
console.log( typeof frase);

//Prueba 3
function saludoBienvenida(nombre){
    console.log("Bienvenido, "+nombre);

}
saludoBienvenida("Roberto")
saludoBienvenida("Alvaro")
saludoBienvenida("Daniel")

//Prueba 4
let numUnidades;
let precio;


function CalcularPrecio(numUnidades, precio){
    precioFinal=numUnidades*precio;
    return console.log("El precio final es: "+ precioFinal+ " euros");

}
CalcularPrecio(6, 2.50)

//Prueba 5
let funcionSumarUnoMas=function (valor){
    valor++;
    return valor++;

};
console.log(funcionSumarUnoMas(4));

let valorsuma=5;
console.log("Valor inicial= "+valorsuma);
console.log(valorsuma++);
console.log("Prueba suma 1= "+valorsuma);
console.log(valorsuma++);
console.log("Prueba suma 2= "+valorsuma);

//Prueba 6
let funcionLambda = (arg1, arg2)=> {return arg1 +arg2}

console.log(funcionLambda(3,2));

let funcionProcesadoraPar=function (arg1, arg2, funcionProcesadora){
    return funcionProcesadora(arg1, arg2);
}

console.log("Esta vez procesamos una función (de 3 y 2):" + funcionProcesadoraPar(3,2,(n1,n2)=> {return n1+n2}));

console.log("Esta vez procesamos una función (de 3 y 2): " + funcionProcesadoraPar(3,  2, (n1,n2)=>n1*n2));

//Prueba 6.2
let procesaTres = function (arg1, arg2, arg3, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2, arg3);
}

console.log("Esta vez procesamos una función para sumar (de 2, 5 y 4): "+procesaTres(2, 5, 4, (arg1,arg2,arg3)=>{return arg1+arg2+arg3}));

console.log("Esta vez procesamos una función para devolver el mayor (de 2, 5 y 4): "+procesaTres(2, 5, 4, (arg1,arg2,arg3)=>{
    if(arg1>arg2 && arg1>arg3) {return arg1}
    else if(arg2>arg1 && arg2>arg3) {return arg2}
    else{return arg3}
}));

console.log("Esta vez procesamos una función para devolver el menor (de 2, 5 y 4): "+procesaTres(2, 5, 4, (arg1,arg2,arg3)=>{
    if(arg1<arg2 && arg1<arg3) {return arg1}
    else if(arg2<arg1 && arg2<arg3) {return arg2}
    else{return arg3}
}));

console.log("Esta vez procesamos una función para devolver la suma del primero por el tercero entre el segundo (de 2, 5 y 4): "+procesaTres(2, 5, 4, (arg1,arg2,arg3)=>{
    return (arg1+arg3)/arg2;
}));

//Prueba 7--------------
function cambiarContenido(a, b, c){
    a.a*10;
    b.item="cambiar";
    c={item: "cambiar"};

}
var num =10;
var obj1={item:"inicial"};
var obj2={item:"inicial"};

cambiarContenido(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);

//Prueba 8---------
function calcularPrecioConImpuesto(valor, impuesto=10){
    return valor+impuesto;
}

console.log("Producto de 100€, sin entrada de impuesto: "+calcularPrecioConImpuesto(100));
console.log("Producto de 100€, con 30€ de impuesto: "+calcularPrecioConImpuesto(100, 30));

//Prueba 9---------
//----if-------
let precio2=65;

if (precio2<50){
    console.log("Esto es barato");
}else if (precio2<100){
    console.log("Esto no es tan barato...");
}else {
    console.log("Esto es caro");
}

//----SWITCH--------
let tipoUsuario=1;

switch (tipoUsuario){
    case 1:
    case 2:
        console.log("Puedes acceder.");
        break;
    case 3:
        console.log("No tienes permiso para acceder");
        break;
    default:
        console.error("Tipo de usuario incorrecto");
}

//Prueba 10-------
//while------
console.log("PreIncremento");
let i=1;
while (i<5){
    console.log(i++);
}

console.log("\nPostIncremento");
let j=1;
while (j<5){
    console.log(++j);
}

//Do while-----------
console.log("\nCon Do...while");
let value=1;
do {
    console.log(value++);
}while (value<=5);

//for----------
console.log("\nCon For");
for (let indice=0;indice<5;indice++){
    console.log(indice);
}

console.log("\nFor con múltiples sentencias");
for (let ind1=0, ind2=5; ind1<5 && ind2>0;ind1++, ind2--){
    console.log(ind1+" -- "+ind2);
}

//prueba 12--------
let c=3;
let d="12";
console.log(c*d);
console.log(c + d);
console.log(c + +d);

let a=3;
let b="asdf";

console.log(a+b);//lo concatena

//Prueba 14------
function setPersona(){
    let persona="Pedro";
    console.log(persona);
}
let persona="Marcos";
setPersona();
console.log(persona);

