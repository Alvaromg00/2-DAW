import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'estrellas-rating',
  templateUrl: './estrellas-rating.component.html',
  styleUrls: ['./estrellas-rating.component.scss']
})
export class EstrellasRatingComponent implements OnInit{
  @Input() numEstrellas: number=0;
  public numEstrellasAux: number=0;
  @Output() numEstrellascambiadas=new EventEmitter<number>();

  constructor(){ }

  setPuntuacion(){
    this.numEstrellascambiadas.emit(this.numEstrellasAux);
  }

  ngOnInit(): void {   
    this.restaurarEstrellas();
  }

  restaurarEstrellas(){
    this.numEstrellasAux=this.numEstrellas;
  }
}
