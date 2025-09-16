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

    this.listaProductos.push(new Producto().nuevoProducto(1, 'Pan', 10, 100, false, 100));
    this.listaProductos.push(new Producto().nuevoProducto(1,"Azúcar Moreno",17,9));
    this.listaProductos.push(new Producto().nuevoProducto(2,"pan",4,0));
  }
}
