import { Component, Input, OnInit} from '@angular/core';
import { IProducto } from '../../interfaces/i-producto';

@Component({
  selector: 'item-producto, [item-producto]' ,
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.scss']
})
export class ItemProductoComponent implements OnInit{
  @Input() producto: IProducto | any;
  @Input() displayFotos:  | any;

  constructor(){ }

  mostrarPrecio(prod: IProducto){
    alert(prod.precio)
  }

  ngOnInit() {   
  }
    claseBoton: string = 'btn-primary';

    oculto=false;
    textoBoton='Ocultar';
    ClasesBoton={
      'btn':true,
      'btn-primary':false,
      'btn-danger':true,
    };

    filtroBusqueda: string = '';
    anchoImagenes=100;

}
