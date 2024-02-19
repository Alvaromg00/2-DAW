import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/i-producto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaProductoService {
  private URLproductos='http://localhost:3000/productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<IProducto[]>{
    return this.http.get<IProducto[]>(this.URLproductos).pipe(
      retry(3),
      catchError((resp: HttpErrorResponse) => of( [
        {
          'id': 4,
          'descripcion': 'Producto-Prueba',
          'disponibilidad': new Date('2000-01-01T00:00:00.000Z'),
          'precio': 100,
          'imagenUrl': 'assets/ps5.jpg',
          'puntuacion': 2
        }
      ])
    ),
    tap(listaProductos => console.log(listaProductos)),
    map(listaProductos => listaProductos.filter(p => p.puntuacion <= 5))
    );
  }

  guardarProducto(prod: IProducto): Observable<IProducto> {
    return this.http.put<IProducto>(this.URLproductos + '/' + prod.id, prod);
  }

}
