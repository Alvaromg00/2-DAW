let primerElemento = document.getElementById("primerElemento");
let sigElemento = primerElemento.nextElementSibling;
let sigsigElemento = sigElemento.nextElementSibling;

console.log(primerElemento.nodeName);
console.log(sigElemento.nodeName); 
console.log(sigsigElemento.nodeName);

console.log(primerElemento.nodeType); 
console.log(sigElemento.nodeType); 
console.log(sigsigElemento.nodeType); 

console.log(primerElemento.nodeValue);
console.log(sigElemento.nodeValue);
console.log(sigsigElemento.nodeValue);

console.log(primerElemento.textContent);
console.log(sigElemento.textContent);
console.log(sigsigElemento.textContent);