//Paso1-----------
num1=prompt("Introduce un número");
num2=prompt("Introduce otro número");
num3=prompt("Introduce otro número");

suma= +num1 + +num2 + +num3;


    if(suma==100){
        alert("Enhorabuena");
    }else{
        alert("Error");
    }

    //paso2--------------
function alerta(){
    alert("Hola")
}
    
    setTimeout(alerta, 3000);

    //Paso 3-------------
    nom=prompt("Introduce tu nombre");
    function nombre(){
        alert(nom);
    }
    setTimeout(nombre, 5000)

    //Paso4 --------------
    function acciones(cadena){
         
        let numchar=cadena.length;
        let numvocales=cadena.match(/[aeiouAEIOU]/g).length;
        let empiezapora=cadena.charAt(0).toLowerCase()==='a';

        let resultado={
            caracteres:numchar,
            vocales:numvocales,
            porA:empiezapora,
        };
        return resultado;
    }
    frase="Hola, alvaro";
    
    resultado=acciones(frase);
    console.log("Número de caracteres: ",resultado.caracteres);
    console.log("Numero de vocales", resultado.vocales);
    console.log("Numero de vocales", resultado.porA);
    let a=1;
    console.log(++a);