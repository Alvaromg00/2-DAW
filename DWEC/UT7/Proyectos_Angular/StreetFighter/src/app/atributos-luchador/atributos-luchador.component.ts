import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-atributos-luchador',
  templateUrl: './atributos-luchador.component.html',
  styleUrl: './atributos-luchador.component.scss'
})
export class AtributosLuchadorComponent {
  @Input() nombreAtributo: string ='';
  @Input() valorAtributo: number=0;
  
}
