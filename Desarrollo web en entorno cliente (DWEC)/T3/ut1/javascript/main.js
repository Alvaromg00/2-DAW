let body=document.body;//referencia al elemento body

let nuevoparrafo=document.createElement("p");//Crea elemento parrafo
let textoParrafo=document.createTextNode("Este es el párrafo final");//crea nodo texto
nuevoparrafo.appendChild(textoParrafo);//añade el nodo texto como ultimo hijo del elemento parrafo
body.appendChild(nuevoparrafo);//añade el nodo nuevo parrafo como ultimo hijo del body