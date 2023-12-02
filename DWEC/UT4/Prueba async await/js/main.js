const urlUsuarios='https://jsonplaceholder.typicode.com/users/';
document.addEventListener('DOMContentLoaded', main);
function main(e){
    let boton=document.querySelector('#usuario-1-cargar');
    boton.addEventListener('click', async e=>{
        let usuario1= await obtenerUsuario(2);
        document.querySelector('#usuario-1-nombre').innerHTML=usuario1.name;
    });
}

function obtenerUsuario(id){
    let usuario=fetch(urlUsuarios+id).then(res=>res.json());
    console.log(usuario);
    return usuario;
}