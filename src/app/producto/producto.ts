import { Component } from '@angular/core';

@Component({
  selector: 'producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {
  protected id: number;
  protected nombre: string;
  protected coste: number;
  protected tengo: number;
  protected bMateriaPrima: boolean;
  protected cantidadInicial: number;

  constructor() {
    this.id = -1;
    this.nombre = "";
    this.coste = -1;
    this.tengo = -1;
    this.bMateriaPrima = false;
    this.cantidadInicial = -1;
  }
}