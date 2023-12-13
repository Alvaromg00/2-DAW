class Post{
    constructor(objPost){
        this.userId=objPost.userId;
        this.id=objPost.id;
        this.titulo=objPost.title;
        this.contenido=objPost.body;
    }

    toDiv(){
        let nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("entrada");

    nuevoDiv.innerHTML = `
        <p><strong>TITULO</strong>: ${this.titulo}</p>
        <div>
            <p><strong>Contenido</strong>: ${this.contenido}</p>
            <button class="mostrarUsuario">Usuario del Post</button>
            <button class="mostrarComentarios">Mostrar comentarios</button>
            <div class="usuario d-none">
                <p><strong>NOMBRE USUARIO: </strong><span class="nombre-usuario"></span></p>
            </div>
            <div class="comentarios d-none">
                <p><strong>Comentarios: </strong></p>
            </div>
        </div>
    `;

    nuevoDiv.querySelector(".mostrarUsuario").addEventListener('click', () => {
        let usuarioDiv = nuevoDiv.querySelector('.usuario');
        let nombreUsuarioSpan = usuarioDiv.querySelector('.nombre-usuario');

        //solicitud fetch para obtener el nombre del usuario
        fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
            .then(response => response.json())
            .then(datosUsuario => {
                nombreUsuarioSpan.textContent = datosUsuario.name;
                usuarioDiv.classList.toggle('d-none');
            })
            .catch(error => console.log(error.message));
    });


    nuevoDiv.querySelector(".mostrarComentarios").addEventListener('click', () => {
        let comentariosDiv = nuevoDiv.querySelector('.comentarios');

        //Solicitud fetch para obtener los comentarios
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`)
            .then(response => response.json())
            .then(comentarios => {
                // Limpia el contenido anterior de comentariosDiv
                comentariosDiv.innerHTML = "<p><strong>Comentarios:</strong></p>";
                // Recorre los comentarios y agregarlos al div
                for (let comentario of comentarios) {
                    comentariosDiv.innerHTML += `<p>- ${comentario.name}</p>`;
                }
                comentariosDiv.classList.toggle('d-none');
            })
            .catch(error => console.log(error.message));
    });


    return nuevoDiv;
    }
}

export default Post;