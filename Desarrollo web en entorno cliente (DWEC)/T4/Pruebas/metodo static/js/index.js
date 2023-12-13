class MathLibrary {
    // calcula el área de un círculo
    static AreaCirculo(radio) {
      return Math.PI * radio * radio;
    }
  
    //calcula la longitud de una circunferencia
    static LongitudCircunferencia(radio) {
      return 2 * Math.PI * radio;
    }
  }
  
  const radio = 5;
  const area = MathLibrary.AreaCirculo(radio);
  const longitud = MathLibrary.LongitudCircunferencia(radio);
  
  console.log("Área del círculo: "+area);
  console.log("Longitud de la circunferencia: "+longitud);