document.getElementById("botonObras").addEventListener('click', ()=>{
        fetch("https://api.artic.edu/api/v1/artworks").then(response=>response.json()).then(objJSON=>{
            document.querySelector("#nombreObras").textContent="";
            for(let elemento of objJSON.data){
                const obraElemento = document.createElement('li');
                obraElemento.textContent = elemento.title;

                document.querySelector("#nombreObras").appendChild(obraElemento);
            }

        }).catch(error=>console.log(error.message));
});

document.getElementById("obrasPais").addEventListener('click', ()=>{
    fetch("https://api.artic.edu/api/v1/artworks").then(response=>response.json()).then(objJSON=>{
        document.querySelector("#paisObras").textContent="";
        for(let elemento of objJSON.data){
            if(elemento.place_of_origin==document.querySelector("#entrada").value){
                const obraElemento = document.createElement('li');
                obraElemento.textContent = elemento.title+", "+elemento.place_of_origin;
                document.querySelector("#paisObras").appendChild(obraElemento);
            }
        }
    });
});