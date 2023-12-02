var obj2={
    nombre:"paco",
    edad:32,
    getInfo(){
        return "Mi nombre es "+this.nombre+" y tengo"+this.edad
    }
};

console.log(obj2.getInfo());
console.log(obj2.nombre);
console.log(obj2["nombre"]);

var prop2="nombre";
console.log(obj2[prop2]);