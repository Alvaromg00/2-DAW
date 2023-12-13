const entradaDNI=document.getElementById("dni");
const entradaFecha=document.getElementById("fecha");
const entradaIdentificador=document.getElementById("identificador");

//pongo a la escucha los botones de entrada, con el evento click y le paso una funcion anónima que se encarga de almacenar en la entrada el primer elemento de la coleción devuelta.
entradaDNI.addEventListener("click", () =>{
    const entrada=document.getElementsByName("texto")[0].value;
    const expreg=/^\d{7,8}[A-Z]$/;
    if(expreg.test(entrada)){
        alert("El DNI es válido");
    }else{
        alert("El DNI no es válido");
    }
})

entradaFecha.addEventListener("click", () =>{
    const entrada=document.getElementsByName("texto")[0].value; 
    const expreg=/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
    if(expreg.test(entrada)){
        alert("La fecha es válida");
    }else{
        alert("La fecha no es válida");
    }
})

entradaIdentificador.addEventListener("click", () =>{
    const entrada=document.getElementsByName("texto")[0].value; 
    const expreg=/^[a-z_][A-Za-z0-9_]*$/
    if(expreg.test(entrada)){
        alert("El id es válido");
    }else{
        alert("El id no es válido");
    }
})



