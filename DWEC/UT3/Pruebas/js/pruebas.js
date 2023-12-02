//Prueba 1, 2 y 3---------
console.log(window.outerWidth+"-"+window.outerHeight);
//window.open("https://www.google.com");
console.log(window.screen.width+" - "+ window.screen.height);
console.log(window.screen.availWidth+" - "+ window.screen.availHeight);
console.log(window.navigator.userAgent);

var variable= "Hola";
console.log(window.variable);
console.log(history.length);

window.navigator.geolocation.getCurrentPosition(function (posicion){
    console.log("Latitud: "+posicion.coords.latitude+" longitud: "+posicion.coords.longitude);
})

//------------------------
/*console.log("1. "+new Date().toString());
setTimeout(()=> console.log("2. "+new Date().toString()), 2000);
console.log("3. "+new Date().toString());

let num=1;
let idInterval=setInterval(function(){
    num++;
    console.log(new Date().toString());
    if(num>5){
        clearInterval(idInterval);
    }
}, 1000);*/

//Prueba 6---------
let raiz=document.documentElement;
console.log(raiz);

let head=document.head;
console.log(head.nodeName);
console.log(head);
console.log(head.nextSibling);

let body=document.body;
console.log(body);
console.log(body.nextElementSibling);

let p=document.getElementById("parrafo2");
console.log(p.nodeName);

console.log(body.childNodes);

let nuevoParrafo=document.createElement("p");
let textParrafo=document.createTextNode("Este es el párrafo final");
nuevoParrafo.appendChild(textParrafo);
document.body.appendChild(nuevoParrafo);

//----HTML Collection (prueba 7)------------


let claseP = document.getElementsByName("parrafos");//genera un HTML collection de 2 elementos
//lo recorro------
for (let item of claseP) {
    console.log(item.id);
}
//borro un elemento------
let p1=document.getElementsByClassName("parrafos");
body.removeChild(p1[0]);
//lo vuelvo a recorrer para comprobar que se a borrado el elemento en "vivo"-----
for (let item of claseP) {
    console.log(item.id);
}

