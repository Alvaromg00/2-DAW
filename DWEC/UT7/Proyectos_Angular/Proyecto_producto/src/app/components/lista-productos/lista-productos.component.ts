import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.scss'
})
export class ListaProductosComponent {
titulo= "Lista producto";
cabeceras={
  descripcion: "Productos",
  precio: "Precio",
  disponibilidad: "Disponibilidad"
}
}