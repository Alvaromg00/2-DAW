let evalua=true;

document.getElementById('boton').addEventListener('click', ()=>{
    if(evalua){

        function pintarInfoObra(objetoObra){
            let fila=document.createElement('tr');
            fila.innerHTML = `
                        <td>${objetoObra.title}</td>
                        <td>${objetoObra.artist_title}</td>
                        <td>${objetoObra.artwork_type_title}</td>
                        <td>${objetoObra.medium_display}</td>
                        <td>${objetoObra.dimensions}</td>
                        <td>${objetoObra.place_of_origin}</td>
                    `;
        
            return fila;
        }
        
        let peticionAjax=new XMLHttpRequest();
        peticionAjax.addEventListener("readystatechange", procesarPeticion);
        let urlPeticion="https://api.artic.edu/api/v1/artworks";
        peticionAjax.open("GET", urlPeticion);
        peticionAjax.send();
        
        function procesarPeticion(){
            if(this.readyState==4 && this.status==200){
                let objetoResultado=JSON.parse(this.responseText);
                procesarResultado(objetoResultado);
            }
        }
        
        let tablaBody;
        function procesarResultado(objetoResultado){
            tablaBody=document.getElementById('tablaBody');
            for(let obra of objetoResultado.data){
                tablaBody.appendChild(pintarInfoObra(obra));
            }
        }
        evalua=false;
    }
});
