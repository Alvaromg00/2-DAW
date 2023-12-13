const boton = document.getElementById('boton');
let evalua=false;

boton.addEventListener('click', function () {
    if(evalua==false){
        function pintarInfoMuseo(objetoMuseo) {
            let contenido = document.createElement('tr');
            contenido.innerHTML = `
                <td style="border: 1px solid black; text-align: center;">${objetoMuseo.rdfs_label.value}</td>
                <td style="border: 1px solid black; text-align: center;">${objetoMuseo.geo_lat.value}</td>
                <td style="border: 1px solid black; text-align: center;">${objetoMuseo.geo_long.value}</td>
                <td style="border: 1px solid black; text-align: center;">${objetoMuseo.schema_url ? objetoMuseo.schema_url.value : '--'}</td>
            `;
            return contenido;
        }
    
        let url = "https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/museos.json";
    
        let traerMuseos = new Promise(function (resolve, reject) {
            let peticionAjax = new XMLHttpRequest();
            peticionAjax.addEventListener("readystatechange", function (e) {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        resolve(JSON.parse(this.responseText));
                    } else {
                        reject(this.statusText);
                    }
                }
            });
            peticionAjax.open("GET", url);
            peticionAjax.send();
        });
    
        traerMuseos.then(res => procesarResultado(res)).catch(err => procesarResultado(err));
    
        function procesarResultado(objetoResultado) {
            let contenedor = document.getElementById('contenedorTabla');
            let tabla = document.createElement('table');
    
            let fila = document.createElement('tr');
            fila.innerHTML = `
            <th style="border: 1px solid black;">Nombre</th>
            <th style="border: 1px solid black;">Latitud</th>
            <th style="border: 1px solid black;">Longitud</th>
            <th style="border: 1px solid black;">URL web</th>
             `;
            tabla.appendChild(fila);
    
            for (let museo of objetoResultado.results.bindings) {
                let filaMuseo = pintarInfoMuseo(museo);
                filaMuseo.style.border = "1px solid black";
                tabla.appendChild(filaMuseo);
            }
            contenedor.appendChild(tabla);
        }
        evalua=true;
    }

});