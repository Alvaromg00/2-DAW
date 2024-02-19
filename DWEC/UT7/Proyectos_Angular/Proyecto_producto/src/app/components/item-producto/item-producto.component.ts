import { Component, Input, OnInit} from '@angular/core';
import { IProducto } from '../../interfaces/i-producto';
import { CargaProductoService } from '../../servicios/carga-producto.service';

@Component({
  selector: 'item-producto, [item-producto]' ,
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.scss']
})
export class ItemProductoComponent implements OnInit{
  @Input() producto: IProducto | any;
  @Input() displayFotos:  | any;

  constructor(private cargaProductos: CargaProductoService){ }

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

    cambioEstrellas(nuevaPuntuacion: number) {
      this.producto.puntuacion = nuevaPuntuacion;
      this.cargaProductos.guardarProducto(this.producto).subscribe(
        p => console.log('Actualizando el producto' + p),
        error => console.log(error)
      );
    }

}
