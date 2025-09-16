import { Component } from '@angular/core';
import { Producto } from '../producto/producto';

@Component({
  selector: 'productos',
  imports: [Producto],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  listaProductos: Producto[];

  constructor() {
    this.listaProductos = [];
  }
}
