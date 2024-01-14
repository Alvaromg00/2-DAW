import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.scss'
})
export class ListaProductosComponent {
titulo= "Lista de productos";
cabeceras={
  imagen: "Imagen",
  descripcion: "Producto",
  precio: "Precio",
  disponibilidad: "Disponibilidad"
};
productos=[
  {
    nombre: "Lenovo Ideapad",
    precio: "460€",
    disponible: "Sí"
  },
  {
    nombre: "Playstation 5",
    precio: "499€",
    disponible: "No"
  },
  {
    nombre: "Xiaomi Redmi Note 13",
    precio: "280€",
    disponible: "Sí"
  }
]
}