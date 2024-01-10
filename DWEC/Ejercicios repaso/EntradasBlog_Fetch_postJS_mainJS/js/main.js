import Post from './post.js';

let contenedor=document.getElementById("contenedorEntradas");

fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json()).then(objJSON=>{
    let posts=[];
    objJSON.forEach(elemento=>{
        posts.push(new Post(elemento));
    });
    return posts;
}).then(posts=>{
    posts.forEach(post=>{
        contenedor.appendChild(post.toDiv());
    })
}).catch(error=>console.log(error.message));