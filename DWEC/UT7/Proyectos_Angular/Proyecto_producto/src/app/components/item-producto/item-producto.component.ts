import { Component, OnInit} from '@angular/core';
import { IProducto } from '../../interfaces/i-producto';

@Component({
  selector: 'item-producto',
  templateUrl: './item-producto.component.html',
  styleUrl: './item-producto.component.scss'
})
export class ItemProductoComponent implements OnInit{
  producto: IProducto={id:1,
    descripcion: "Lenovo Ideapad",
    disponibilidad: new Date('2020-12-02'),
    precio: 460,
    imagenUrl: 'assets/lenovo.jpg',
    puntuacion: 1};
verImagenes=true;

constructor(){ }

mostrarPrecio(prod: IProducto){
  alert(prod.precio)
}

ngOnInit() {   
}

mostrarImagenes: boolean = true;
  claseBoton: string = 'btn-primary';

  oculto=false;
  textoBoton='Ocultar';
  displayFotos='block';
  ClasesBoton={
    'btn':true,
    'btn-primary':false,
    'btn-danger':true,
  };

  mostrarOcultarImagen(){
    this.textoBoton=!this.oculto ? 'Mostrar' : 'Ocultar'
    this.ClasesBoton["btn-danger"]=this.oculto
    this.ClasesBoton["btn-primary"]=!this.oculto
    this.displayFotos=this.oculto ? 'block' : 'none'
    this.oculto=!this.oculto;
  }

  filtroBusqueda: string = '';
  anchoImagenes=100;

}
