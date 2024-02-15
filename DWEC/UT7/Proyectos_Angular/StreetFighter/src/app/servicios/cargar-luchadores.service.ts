import { Injectable } from '@angular/core';
import { ILuchador } from '../interfaces/iluchador';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargarLuchadoresService {
  private URLluchadores='http://localhost:3000/luchadores';

  constructor(private http: HttpClient) { }

  getLuchadores(): Observable<ILuchador[]>{
    return this.http.get<ILuchador[]>(this.URLluchadores);
  }

}
