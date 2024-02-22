import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from '../../interfaces/i-producto';
import { CargaProductoService } from '../../servicios/carga-producto.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.scss']
})
export class DetallesProductoComponent implements OnInit {
  producto: IProducto | any;
  idProducto: number = 0;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.idProducto = this.route.snapshot.params['id'];
    this.producto = this.route.snapshot.data['producto'];
  }
  
}
