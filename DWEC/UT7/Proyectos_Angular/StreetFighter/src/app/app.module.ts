import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreaSeleccionComponent } from './area-seleccion/area-seleccion.component';
import { RetratoLuchadorComponent } from './retrato-luchador/retrato-luchador.component';
import { AtributosLuchadorComponent } from './atributos-luchador/atributos-luchador.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, AreaSeleccionComponent, RetratoLuchadorComponent, AtributosLuchadorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
