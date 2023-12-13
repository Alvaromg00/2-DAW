let prometoLimpiar=new Promise(function(resolve, reject){
    let limpia=true;
    if(limpia){
        resolve("Esta limpia");
    }else{
        reject("Sigue sucia");
    }
});

function cuandoFunciona(valorDesdeResolve){
    console.log(valorDesdeResolve);
}

function cuandoNoSeCumple(valorDesdeReject){
    console.log(valorDesdeReject);
}

prometoLimpiar.then(cuandoFunciona).catch(cuandoNoSeCumple);

//modificación

let prometoLimpiar2=new Promise(function(resolve, reject){
    setTimeout(()=>{
        let limpiaFloat=Math.random();
        if(limpiaFloat>0.5){
            resolve("Esta limpia");
        }else{
            reject("Sigue sucia");
        }
    }, 1000);
});

function cuandoFunciona(valorDesdeResolve){
    console.log(valorDesdeResolve);
}

function cuandoNoSeCumple(valorDesdeReject){
    console.log(valorDesdeReject);
}

prometoLimpiar2.then(cuandoFunciona).catch(cuandoNoSeCumple);