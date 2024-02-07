import { Component, OnInit } from '@angular/core';
import {ILuchador} from "../interfaces/iluchador";
import { CargarLuchadoresService} from "../servicios/cargar-luchadores.service";
import { style } from '@angular/animations';

@Component({
  selector: 'app-area-seleccion',
  templateUrl: './area-seleccion.component.html',
  styleUrl: './area-seleccion.component.scss'
})
export class AreaSeleccionComponent implements OnInit{

  luchadores: ILuchador[] | undefined;
  indiceSelected: number=-1;

  constructor(private cargaLuchador: CargarLuchadoresService){}

  ngOnInit(){
    this.luchadores=this.cargaLuchador.getLuchadores();
  }

}
