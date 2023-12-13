

const boton=document.getElementById('boton');
boton.addEventListener('click', function (){
    
    function pintarInfoObra(objetoObra){
        let tabla=document.createElement('table');
        tabla.innerHTML = `
                    
                    <tr>
                    <td>${objetoObra.rdfs_label.value}</td>
                    <td>${objetoObra.geo_lat.value}</td>
                    <td>${objetoObra.geo_long.value}</td>
                    <td>${objetoObra.schema_url.value}</td>
                    </tr>
                `;
    
        return tabla;
    }
    
    let peticionAjax=new XMLHttpRequest();
    peticionAjax.addEventListener("readystatechange", procesarPeticion);
    let urlPeticion="https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/museos.json";
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
        tablaBody=document.getElementById('contenedorTabla');
        for(let obra of objetoResultado.results.bindings){
            tablaBody.appendChild(pintarInfoObra(obra));
        }
    }
});
