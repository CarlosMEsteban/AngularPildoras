import { Component } from '@angular/core';
import { Producto } from '../producto/producto';
import { NgFor } from '@angular/common';

@Component({
  selector: 'productos',
  imports: [Producto, NgFor],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  listaProductos: Producto[];

  constructor() {
    this.listaProductos = [];
    console.log('Constructor para Productos');

    this.listaProductos.push(new Producto().nuevoProducto(1, 'Pan', 10, 100, false, 100));
    this.listaProductos.push(new Producto().nuevoProducto(1,"Azúcar Moreno",17,9));
    this.listaProductos.push(new Producto().nuevoProducto(2,"pan",4,0));
    console.log(this.listaProductos.length);
  }
}
