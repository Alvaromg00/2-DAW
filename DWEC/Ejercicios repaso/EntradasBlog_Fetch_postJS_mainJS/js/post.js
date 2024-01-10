class Post{
    constructor(objPost){
        this.userId=objPost.userId;
        this.id=objPost.id;
        this.titulo=objPost.title;
        this.contenido=objPost.body;
    }

    toDiv(){
        let nuevoDiv=document.createElement("div");
        nuevoDiv.classList.add("entrada");

        nuevoDiv.innerHTML=`
            <p><strong>TITULO: </strong>${this.titulo}</p>
            <div>
                <p><strong>CONTENIDO: </strong>${this.contenido}</p>
                <button class="mostrarUsuario">Usuario</button>
                <button class="mostrarComentarios">Comentarios</button>
                <div class="usuario d-none">
                    <p>Nombre: <span class='nombre-usuario'></span></p>
                </div>
                <div class="Comentarios d-none">
                    <p>Comentarios: </p>
                </div>
            </div>
        `;
        
        nuevoDiv.querySelector(".mostrarUsuario").addEventListener('click', ()=>{
            let usuarioDiv = nuevoDiv.querySelector('.usuario');
            let nombreUsuarioSpan = usuarioDiv.querySelector('.nombre-usuario');

            fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
            .then(response=>response.json())
            .then(datosUsuario => {
                nombreUsuarioSpan.textContent = datosUsuario.name;
                usuarioDiv.classList.toggle('d-none');
            })
            .catch(error=>console.log(error.message));
            });

            nuevoDiv.querySelector(".mostrarComentarios").addEventListener('click', ()=>{
                let comentariosDiv = nuevoDiv.querySelector('.Comentarios');
    
                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`)
                .then(response=>response.json())
                .then(comentarios => {
                    comentariosDiv.innerHTML = `<p>Comentarios: </p>`;
                    for (let comentario of comentarios) {
                        comentariosDiv.innerHTML += `<p>- ${comentario.name}</p>`;
                    }
                    comentariosDiv.classList.toggle('d-none');
                })
                .catch(error=>console.log(error.message));
            });

        return nuevoDiv;
    }
}

export default Post;