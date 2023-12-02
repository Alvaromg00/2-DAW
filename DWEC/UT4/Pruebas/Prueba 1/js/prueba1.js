var obj=new Object();
obj.nombre="Pedro";
obj["edad"]=41;
obj.getInfo=function(){
    return "Mi nombre es "+this.nombre+" y tengo"+this.edad
};

console.log(obj.getInfo());
console.log(obj.nombre);
console.log(obj["nombre"]);

var prop="nombre";
console.log(obj[prop]);