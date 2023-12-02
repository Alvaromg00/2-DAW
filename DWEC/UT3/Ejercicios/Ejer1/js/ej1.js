let primerLi=document.getElementById("primerelemento");
console.log(primerLi.nodeName);
console.log(primerLi.nodeType);
console.log(primerLi.nodeValue);
console.log(primerLi.textContent);

let segundoLi=primerLi.nextElementSibling;
console.log(segundoLi.nodeName);
console.log(segundoLi.nodeType);
console.log(segundoLi.nodeValue);
console.log(segundoLi.textContent);

let tercerLi=segundoLi.nextElementSibling;
console.log(tercerLi.nodeName);
console.log(tercerLi.nodeType);
console.log(tercerLi.nodeValue);
console.log(tercerLi.textContent);

