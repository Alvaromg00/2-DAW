import { Component, Input } from '@angular/core';
import { ILuchador } from '../interfaces/iluchador';

@Component({
  selector: 'app-retrato-luchador',
  templateUrl: './retrato-luchador.component.html',
  styleUrl: './retrato-luchador.component.scss'
})
export class RetratoLuchadorComponent {

  @Input() luchador: ILuchador | undefined;

  constructor() {}
}
