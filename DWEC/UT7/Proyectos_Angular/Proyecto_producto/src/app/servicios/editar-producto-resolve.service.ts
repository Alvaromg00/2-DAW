import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../interfaces/i-producto';

@Injectable({
  providedIn: 'root'
})
export class EdicionProductoService {

  private Url = 'http://localhost:3000/productos/editar'; // URL de la API para editar productos

  constructor(private http: HttpClient) { }

  editarProducto(id: number, productoActualizado: IProducto): Observable<IProducto> {
    const url = `${this.Url}/${id}`;
    return this.http.put<IProducto>(url, productoActualizado);
  }
}
