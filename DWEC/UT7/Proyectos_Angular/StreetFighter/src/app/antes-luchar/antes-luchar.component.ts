import { Component } from '@angular/core';
import { ILuchador } from '../interfaces/iluchador';
import { CargarLuchadoresService } from '../servicios/cargar-luchadores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-antes-luchar',
  templateUrl: './antes-luchar.component.html',
  styleUrl: './antes-luchar.component.scss'
})
export class AntesLucharComponent {
  luchadores: ILuchador[] | undefined;
  IdLuchador: any = null;
  luchadorSelect: any = null;
  adversario: any = null;

  constructor(private cargaLuchador: CargarLuchadoresService, private route: ActivatedRoute){}

  ngOnInit() {
    const opcionesSubscribe ={
      next: (listaLuchadores: ILuchador[]) => {
        this.luchadores = listaLuchadores;
        if (this.luchadores && this.IdLuchador !== null && this.luchadores[this.IdLuchador]) {
          this.luchadorSelect = this.luchadores[this.IdLuchador];
          this.adversario=this.luchadores[Math.floor(Math.random() * 4)];
        }
      },
      error: (err: Error) => console.log(err),
      complete: () => console.log('Fin de observable'),
    };
  
    this.cargaLuchador.getLuchadores().subscribe(opcionesSubscribe);
    this.IdLuchador = +this.route.snapshot.params['id'];
  }
}
