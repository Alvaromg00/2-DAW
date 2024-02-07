import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ILuchador } from '../interfaces/iluchador';

@Component({
  selector: 'app-retrato-luchador',
  templateUrl: './retrato-luchador.component.html',
  styleUrls: ['./retrato-luchador.component.scss']
})
export class RetratoLuchadorComponent {

  @Input() luchador: ILuchador | undefined;
  @Input() indiceSelected: number | undefined;
  @Output() hover = new EventEmitter<boolean>();
  @Output() seleccionado = new EventEmitter<boolean>();

  estaHover: boolean = false;
  estaSeleccionado: boolean = false;

  hoverImage(estaHover: boolean): void {
    this.estaHover = estaHover;
    this.hover.emit(estaHover);
  }

  clickImage(): void {
    this.estaSeleccionado = !this.estaSeleccionado;
    this.seleccionado.emit(this.estaSeleccionado);
  }

}
