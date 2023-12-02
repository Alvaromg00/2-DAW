//Aquí realizo la petición a la url, y llama a la funcion procesarPeticion cuando cambia el estado de la petición
let peticionAjax = new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
let urlPeticion = "https://jsonplaceholder.typicode.com/posts";
peticionAjax.open("GET", urlPeticion);
peticionAjax.send();

//procesarPeticion- checkea automaticamente si la peticion es correcta y valida, en ese caso parsea la peticion a un objeto y llama a la función procesarResultado pasándole por parámetro el objeto parseado
function procesarPeticion() {
    if (this.readyState == 4 && this.status == 200){
        let objetoResultado = JSON.parse(this.responseText);
        procesarResultado(objetoResultado);
    }else{
        console.log("Error");
    }
};

//procesarResultado-asigno el div del DOM a la variable contenedor y creo un bucle que recorre todas las entradas del objetoResultado, a cada vuelta de bucle cuelga el div de la función pintarInfo dentro del div contenedor
function procesarResultado(objetoResultado) {
    let contenedor = document.querySelector("#contenedorEntradas");
    for (let entrada of objetoResultado) {
        contenedor.appendChild(pintarInfo(entrada));
    }
}

//pintarInfo- creo un div con la clase entrada y añado dentro de ese div la estructura del HTML
function pintarInfo(entrada) {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("entrada");

    nuevoDiv.innerHTML = `
        <p><strong>TITULO</strong>: ${entrada.title}</p>
        <div>
            <p><strong>Contenido</strong>: ${entrada.body}</p>
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

    //Pongo a los botones a la escucha de eventos de click y con classList.toggle elimina la clase d-none si la encuentra y la añade si no la encuentra
    nuevoDiv.querySelector(".mostrarUsuario").addEventListener('click', function() {
        let usuarioDiv = nuevoDiv.querySelector('.usuario');
        let nombreUsuarioSpan = usuarioDiv.querySelector('.nombre-usuario');
        let usuarioId = entrada.userId;

        //Hago una nueva petición para obtener los detalles del usuario
        let nuevaUrl = `https://jsonplaceholder.typicode.com/users/${usuarioId}`;
        let nuevaPeticion = new XMLHttpRequest();
        nuevaPeticion.addEventListener("readystatechange", function() {
            if (this.readyState == 4 && this.status == 200) {
                let datosUsuario = JSON.parse(this.responseText);
                nombreUsuarioSpan.textContent = datosUsuario.name;
                usuarioDiv.classList.toggle('d-none');
            }
        });

        nuevaPeticion.open("GET", nuevaUrl);
        nuevaPeticion.send();
    });
    //Añado el botón de Mostrar comentarios a la escuchas de eventos de click
    nuevoDiv.querySelector(".mostrarComentarios").addEventListener('click', function() {
        let comentariosDiv = nuevoDiv.querySelector('.comentarios');
    
        //ID del post
        let postId = entrada.id;
    
        // Realizo una nueva petición para obtener los comentarios del post
        let comentariosUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        let comentariosPeticion = new XMLHttpRequest();
        comentariosPeticion.addEventListener("readystatechange", function() {
            if (this.readyState == 4 && this.status == 200) {
                let comentarios = JSON.parse(this.responseText);
                // Limpio el contenido anterior de comentariosDiv
                comentariosDiv.innerHTML = "<p><strong>Comentarios:</strong></p>";
                //con un for recorro los comentarios y los agrego al div
                for (let comentario of comentarios) {
                    comentariosDiv.innerHTML += `<p>- ${comentario.name}</p>`;
                }
                comentariosDiv.classList.toggle('d-none');
            }
        });
    
        comentariosPeticion.open("GET", comentariosUrl);
        comentariosPeticion.send();
    });

    //añado el div al contenedor
    let contenedor = document.querySelector("#contenedorEntradas");
    contenedor.appendChild(nuevoDiv);

    return nuevoDiv;
}