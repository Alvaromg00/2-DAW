import { Component } from '@angular/core';
import { IProducto } from '../interfaces/i-producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.scss'
})
export class ListaProductosComponent {
  titulo= "Lista de productos";
  cabeceras={
    id: "#",
    imagen: "Imagen",
    descripcion: "Producto",
    precio: "Precio",
    disponibilidad: "Disponibilidad"
  };
  productos: IProducto[]=[
    {
      id: 1,
      descripcion: "Lenovo Ideapad",
      disponibilidad: new Date('2020-12-02'),
      precio: 460,
      imagenUrl: 'assets/lenovo.jpg',
      puntuacion: 4
    },
    {
      id: 2,
      descripcion: "Playstation 5",
      disponibilidad: new Date('2023-10-09'),
      precio: 499,
      imagenUrl: 'assets/ps5.jpg',
      puntuacion: 5
    },
    {
      id: 2,
      descripcion: "Xiaomi Redmi Note 13",
      disponibilidad: new Date('2021-02-09'),
      precio: 280,
      imagenUrl: 'assets/xiaomi.jpg',
      puntuacion: 4.2
    },
  ];
}