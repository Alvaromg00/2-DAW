import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/i-producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaProductoService {
  private URLproductos='http://localhost:3000/productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<IProducto[]>{
    return this.http.get<IProducto[]>(this.URLproductos);
  }
}
