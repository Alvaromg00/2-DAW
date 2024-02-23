import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreaSeleccionComponent } from './area-seleccion/area-seleccion.component';
import { RetratoLuchadorComponent } from './retrato-luchador/retrato-luchador.component';
import { AtributosLuchadorComponent } from './atributos-luchador/atributos-luchador.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AntesLucharComponent } from './antes-luchar/antes-luchar.component';


@NgModule({
  declarations: [AppComponent, AreaSeleccionComponent, RetratoLuchadorComponent, AtributosLuchadorComponent, BienvenidaComponent, AntesLucharComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'bienvenida', component: BienvenidaComponent},
        {path: 'seleccion', component: AreaSeleccionComponent},
        {path: 'antes-luchar/:id', component: AntesLucharComponent},
        {path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
        {path: '**', redirectTo: '/bienvenida', pathMatch: 'full'},
      ]
    )
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
