import { Component } from '@angular/core';


@Component({
  selector: 'producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {
  protected idProducto: number;
  protected nombre: string;
  protected coste: number;
  protected tengo: number;
  protected bMateriaPrima: boolean;
  protected cantidadInicial: number;

  constructor()
  {
    this.idProducto = -1
    this.nombre = "";
    this.coste = -1;
    this.tengo = -1;
    this.bMateriaPrima = false;
    this.cantidadInicial = -1;
  };


  getIdProducto(): number {
    return this.idProducto;
  } 

  getNombre(): string {
    return this.nombre;
  } 

  getCoste(): number {
    return this.coste;
  } 


  nuevoProducto(idProducto: number, 
              nombre: string, 
              coste: number, 
              tengo: number,
              bMateriaPrima?: boolean,
              cantidadInicial?: number) : Producto
  {
    const producto = new Producto();
    producto.idProducto = idProducto;
    producto.nombre = nombre;
    producto.coste = coste;
    producto.tengo = tengo;
    producto.bMateriaPrima = bMateriaPrima ?? false;
    producto.cantidadInicial = cantidadInicial ?? 0;
    return producto;
  }  
}