import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { IProducto } from '../interfaces/i-producto';
import { Observable, catchError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CargaProductoService } from './carga-producto.service';

@Injectable({
  providedIn: 'root'
})
export class DetallesProductoResolveService implements Resolve<IProducto> {

  constructor(private cargaProducto: CargaProductoService,
    private router: Router){}

  resolve(route: ActivatedRouteSnapshot): Observable<IProducto> {
      return this.cargaProducto.getProducto(route.params['id']).pipe(
        catchError(error => {
          this.router.navigate(['/bienvenida']);
          return of({} as IProducto); // Devuelve un objeto vacío en caso de error
        })
      );
  }
}
