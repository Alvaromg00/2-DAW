import { Component, OnInit } from '@angular/core';
import { IProducto } from '../../interfaces/i-producto';
import { CargaProductoService } from '../../servicios/carga-producto.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.scss'
})
export class ListaProductosComponent implements OnInit{

  productos: IProducto[] | undefined;

  constructor(private cargaProducto: CargaProductoService, private titleService: Title) {}
  ngOnInit() {
    //Establecde el titulo
    this.titleService.setTitle("Listado de productos")
    const opcionesSubscribe ={
      next: (listaProductos: IProducto[]) => {
        this.productos = listaProductos;
      },
      error: (err: Error) => console.log(err),
      complete: () => console.log('Fin de observable'),
    };
  
    this.cargaProducto.getProductos().subscribe(opcionesSubscribe);
  }

  

  anchoImagenes=100;
  estilosPar={
    'background-color': 'lightblue',
  };
  estilosImpar={
    'background-color': 'aqua',
  };
  titulo= "Lista de productos";
  cabeceras={
    id: "#",
    imagen: "Imagen",
    descripcion: "Producto",
    precio: "Precio",
    disponibilidad: "Disponibilidad"
  };

  
  mostrarPrecio(prod: IProducto){
    alert(prod.precio)
  }
  claseBoton: string = 'btn-primary';

  oculto=false;
  textoBoton='Ocultar';
  displayFotos='block';
  ClasesBoton={
    'btn':true,
    'btn-primary':false,
    'btn-danger':true,
  };

  mostrarOcultarImagen(){
    this.textoBoton=!this.oculto ? 'Mostrar' : 'Ocultar'
    this.ClasesBoton["btn-danger"]=this.oculto
    this.ClasesBoton["btn-primary"]=!this.oculto
    this.displayFotos=this.oculto ? 'block' : 'none'
    this.oculto=!this.oculto;
  }

  filtroBusqueda: string = '';

}