import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ILuchador } from '../interfaces/iluchador';

@Component({
  selector: 'app-retrato-luchador',
  templateUrl: './retrato-luchador.component.html',
  styleUrls: ['./retrato-luchador.component.scss']
})
export class RetratoLuchadorComponent {

  @Input() luchador: ILuchador | undefined;
  @Output() hover = new EventEmitter<boolean>(); // Emite eventos de hover
  estaHover: boolean = false;

  hoverImage(estaHover: boolean): void {
    this.estaHover = estaHover;
    this.hover.emit(estaHover);
  }
}
