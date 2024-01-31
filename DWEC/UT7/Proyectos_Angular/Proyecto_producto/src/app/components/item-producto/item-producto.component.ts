import { Component, OnInit} from '@angular/core';
import { IProducto } from '../../interfaces/i-producto';

@Component({
  selector: 'app-item-producto',
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

ngOnInit() {   
}
}
