let ordenador={
    marca: "HP",
    placaBase: {
        codigo: "1234",
        socket: "LGA",
        frecuencias: [
            {
                primera: 2200,
                segunda: 2600,
                tercera: 2800,
                cuarta: 3300
            }
        ]
    },
    procesador: {
        socket: "LGA",
        frecuencia: 100
    },
    dispositivos:[
        {
            nombre: "Ratón",
            precio: 30,
            conector: "Bluetooth"
        },
        {
            nombre: "Teclado",
            precio: 45,
            conector: "USB"
        },
        {
            nombre: "Monitor",
            precio: 120,
            conector: "HDMI"
        }
    ],

    getInfo(){
        return "-ORDENADOR-\nMarca: "+this.marca+"\n-Placa base:\nCódigo: "+this.placaBase.codigo+"\nSocket: "+this.placaBase.socket+"\nFrecuencias: "+this.placaBase.frecuencias[0].primera+", "+this.placaBase.frecuencias[0].segunda+", "+this.placaBase.frecuencias[0].tercera+", "+this.placaBase.frecuencias[0].cuarta+"\n-Procesador:\n"+"Socket: "+this.procesador.socket+"\nFrecuencia: "+this.procesador.frecuencia+"\n-Dispositivos:\n-Primer dispositivo:\n"+this.dispositivos[0].nombre+", "+this.dispositivos[0].precio+"€, "+this.dispositivos[0].conector+"\n-Segundo dispositivo:\n"+this.dispositivos[1].nombre+", "+this.dispositivos[1].precio+"€, "+this.dispositivos[1].conector+"\n-Tercer dispositivo:\n"+this.dispositivos[2].nombre+", "+this.dispositivos[2].precio+"€, "+this.dispositivos[2].conector;
    }
}
console.log(ordenador.getInfo());