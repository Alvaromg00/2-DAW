import Post from './post.js';

let contenedor=document.getElementById("contenedorEntradas");

fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json()).then(objJSON=>{
    let posts=[];
    for(let postObj of objJSON){
        posts.push(new Post(postObj));
    }
    return posts;
}).then(posts=>{
    for(let post of posts){
        contenedor.appendChild(post.toDiv());
    }
}).catch(error=>console.log(error.message));
