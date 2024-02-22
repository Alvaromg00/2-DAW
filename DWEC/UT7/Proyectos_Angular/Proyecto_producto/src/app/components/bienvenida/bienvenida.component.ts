import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.scss'
})
export class BienvenidaComponent {

  constructor(private titleService: Title){}

  ngOnInit(): void{
    this.titleService.setTitle("Bienvenido")
  }
}
