import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { FiltroProductosPipe } from './pipes/filtro-productos.pipe';
import { ItemProductoComponent } from './components/item-producto/item-producto.component';



@NgModule({
  declarations: [AppComponent, ListaProductosComponent, ItemProductoComponent, FiltroProductosPipe],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
