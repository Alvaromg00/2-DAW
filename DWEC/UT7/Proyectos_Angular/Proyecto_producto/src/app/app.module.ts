import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FiltroProductosPipe } from './pipes/filtro-productos.pipe';
import { ItemProductoComponent } from './components/item-producto/item-producto.component';
import { EstrellasRatingComponent } from './components/estrellas-rating/estrellas-rating.component';
import { CargaProductoService } from './servicios/carga-producto.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';


@NgModule({
  declarations: [AppComponent, ListaProductosComponent, ItemProductoComponent, EstrellasRatingComponent, FiltroProductosPipe, BienvenidaComponent, DetallesProductoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'bienvenida', component: BienvenidaComponent},
        {path: 'productos', component: ListaProductosComponent},
        {path: 'productos/:id', component: DetallesProductoComponent},
        {path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
        {path: '**', redirectTo: '/bienvenida', pathMatch: 'full'},
      ]
    )
  ],
  providers: [CargaProductoService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
