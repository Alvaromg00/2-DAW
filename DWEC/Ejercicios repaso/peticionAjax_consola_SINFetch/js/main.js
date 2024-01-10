function pintarInfoObra(objetoObra){
    let cadenaDeVuelta="";
    cadenaDeVuelta+="Título de la obra: "+objetoObra.title+"\n";
    cadenaDeVuelta+="Nombre del artista: "+objetoObra.artist_title+"\n";
    cadenaDeVuelta+="Tipo de obra: "+objetoObra.artwork_type_title+"\n";
    cadenaDeVuelta+="Técnica de pintura: "+objetoObra.medium_display+"\n";
    cadenaDeVuelta+="Dimensiones de la obra: "+objetoObra.dimensions+"\n";
    cadenaDeVuelta+="Pais de origen del artista: "+objetoObra.place_of_origin+"\n";

    return cadenaDeVuelta
}

let peticionAjax=new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
let urlPeticion="https://api.artic.edu/api/v1/artworks";
peticionAjax.open("GET", urlPeticion);
peticionAjax.send();

function procesarPeticion(event){
    if(this.readyState==4 && this.status==200){
        let objetoResultado=JSON.parse(this.responseText);
        procesarResultado(objetoResultado);
    }
}

function procesarResultado(objetoResultado){
    for(let obra of objetoResultado.data){
        console.log(pintarInfoObra(obra));
    }
}