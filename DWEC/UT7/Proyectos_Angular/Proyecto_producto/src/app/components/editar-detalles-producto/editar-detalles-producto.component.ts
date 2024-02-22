import { Component, OnInit } from '@angular/core';
import { IProducto } from '../../interfaces/i-producto';
import { ActivatedRoute, Router} from '@angular/router';
import { EdicionProductoService } from '../../servicios/editar-producto-resolve.service';

@Component({
  selector: 'app-editar-detalles-producto',
  templateUrl: './editar-detalles-producto.component.html',
  styleUrl: './editar-detalles-producto.component.scss'
})
export class EditarDetallesProductoComponent implements OnInit {

  producto: IProducto | any;
  idProducto: number = 0;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private edicionProductoService: EdicionProductoService){}

  ngOnInit(){
    this.idProducto = this.route.snapshot.params['id'];
    this.producto = this.route.snapshot.data['producto'];
  }

  guardarCambios(): void {
    // Obtener los valores actualizados de los campos de entrada
    const id: number = parseInt(this.idProducto.toString());
    const descripcion = (document.getElementById('descripcion') as HTMLInputElement).value;
    const precio = (document.getElementById('Precio') as HTMLInputElement).value;
    const puntuacion = (document.getElementById('Puntuación') as HTMLInputElement).value;
    const disponibilidad = (document.getElementById('Disponibilidad') as HTMLInputElement).value;
    const imagenUrl=this.producto.imagenUrl;

    // Crear un objeto con los datos actualizados del producto
    const productoActualizado: IProducto = {
      id: id,
      imagenUrl: imagenUrl,
      descripcion: descripcion,
      precio: parseFloat(precio),
      puntuacion: parseFloat(puntuacion),
      disponibilidad: new Date(disponibilidad)
    };

    // Llamar al servicio para editar el producto
  this.edicionProductoService.editarProducto(this.idProducto, productoActualizado)
  .subscribe(
    () => {
      alert( "Producto guardado: \n" +
      "ID: " + productoActualizado.id + "\n" +
      "Descripción: " + productoActualizado.descripcion + "\n" +
      "Precio: " + productoActualizado.precio + "\n" +
      "Puntuación: " + productoActualizado.puntuacion + "\n" +
      "Disponibilidad: " + productoActualizado.disponibilidad + "\n" +
      "Imagen URL: " + productoActualizado.imagenUrl);
    },
    (error: any) => { // <- Declarar explícitamente el tipo del parámetro error como any
      console.error('Error al editar producto:', error);
      // Manejar el error adecuadamente
    }
  );
}

}
