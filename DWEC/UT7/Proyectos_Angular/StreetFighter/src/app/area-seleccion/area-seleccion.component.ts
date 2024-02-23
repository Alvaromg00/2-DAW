import { Component, OnInit } from '@angular/core';
import {ILuchador} from "../interfaces/iluchador";
import { CargarLuchadoresService} from "../servicios/cargar-luchadores.service";

@Component({
  selector: 'app-area-seleccion',
  templateUrl: './area-seleccion.component.html',
  styleUrl: './area-seleccion.component.scss'
})
export class AreaSeleccionComponent implements OnInit{

  luchadores: ILuchador[] | undefined;
  luchadorSeleccionado: any = null;
  indiceSeleccionado: number = -1;

  constructor(private cargaLuchador: CargarLuchadoresService){}

  ngOnInit() {
    const opcionesSubscribe ={
      next: (listaLuchadores: ILuchador[]) => {
        this.luchadores = listaLuchadores;
      },
      error: (err: Error) => console.log(err),
      complete: () => console.log('Fin de observable'),
    };
  
    this.cargaLuchador.getLuchadores().subscribe(opcionesSubscribe);
  }

  estaSelect(indice: number) {
    if (this.indiceSeleccionado === indice) {
      this.indiceSeleccionado = -1; // Deseleccionar si ya estaba seleccionado
    } else {
      this.indiceSeleccionado = indice; // Seleccionar si no estaba seleccionado
    }
    this.luchadorSeleccionado = this.luchadores ? (this.indiceSeleccionado !== -1 ? this.luchadores[this.indiceSeleccionado] : null) : null;
  }

}
