//ejer1----------
let enlaceDiv1=document.querySelector("#div1 a:first-child");
console.log(enlaceDiv1.getAttribute("title"));

//Ejer2------------
let enlaceDiv=document.querySelector("div > a");
console.log(enlaceDiv);

//Ejer3------------
let enlaceP=document.querySelector("#div1 > p:first-child > a ");
console.log(enlaceP);

//Ejer4-------------
let Elemento=document.getElementsByClassName("linkNormal");
let segunElemento=Elemento[1];
console.log(segunElemento.href);

//Ejer5--------------
let atribSpider=document.querySelector(".linkNormal[title^='Spider']");
console.log("Tipo de nodo: "+ atribSpider.nodeType);
console.log("Contenido HTML: "+ atribSpider.innerHTML);


//Ejer6------------
let siguienteA=document.querySelector(".linkNormal[title^='Spider'] + a");
console.log(siguienteA.textContent);

//Ejer7----------------
let siguientelink=document.querySelector(".linkNormal + a");
console.log(siguientelink);

//Ejer8------------------
const spidermanLink=document.querySelector('a[title="Spiderman"]');
let siblings=[];

let currentNode=spidermanLink;
while(currentNode=currentNode.previousSibling) {
    if(currentNode.nodeName==='A'){
    siblings.push(currentNode);
    }
}

currentNode=spidermanLink;
while(currentNode=currentNode.nextSibling) {
    if(currentNode.nodeName==='A'){
    siblings.push(currentNode);
    }
}

siblings.forEach(sibling=>{
    sibling.computedStyleMap.backgroundColor='yellow';
});