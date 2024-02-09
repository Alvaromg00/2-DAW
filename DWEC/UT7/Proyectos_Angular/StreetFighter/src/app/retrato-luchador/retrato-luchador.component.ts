import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ILuchador } from '../interfaces/iluchador';

@Component({
  selector: 'app-retrato-luchador',
  templateUrl: './retrato-luchador.component.html',
  styleUrls: ['./retrato-luchador.component.scss']
})
export class RetratoLuchadorComponent {

  @Input() luchador: ILuchador | undefined;
  @Input() indiceLuchador: number = -1;
  @Input() indiceSeleccionado: number = -1;
  @Output() luchadorSeleccionado = new EventEmitter<number>();

  hover: boolean = false;

  hoverImage(estaHover: boolean): void {
    this.hover = estaHover;
  }

  clickImage(): void {
    this.luchadorSeleccionado.emit(this.indiceLuchador);
  }

}
