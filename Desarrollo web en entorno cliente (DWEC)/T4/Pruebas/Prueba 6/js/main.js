function recurso(url){
    return new Promise(function (resolve, reject){
        let peticion=new XMLHttpRequest();
        peticion.addEventListener('readystatechange', function(e){
            if(this.readyState===4){
                if(this.status===200){
                    resolve(this.responseText);
                }else{
                    reject(this.statusText);
                }
            }
        });
        peticion.open("get", url);
        peticion.send();
    });
}

recurso("https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/museos.json").then(res=> console.log(res)).catch(err=> console.log(err));

