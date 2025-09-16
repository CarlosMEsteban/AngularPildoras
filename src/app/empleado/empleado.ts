
import { Component } from '@angular/core';

@Component({
  selector: 'empleado',  
  templateUrl: './empleado.html',
  //template: `<p>Componente Empleado</p>`, // Plantilla en línea inline
  styleUrl: './empleado.css'
  //styles: ["p { color:blue; }"] // Estilos en línea inline
})
export class Empleado {
  nombre = "Juan";
  apellido = "Perez";
  private edad: number = 30;
  empresa = "Google";

  nuevaEdadProperty = false;

  usuRegistrado = true;

  getEdad(): number {
    return this.edad;
  }

  cambiarEdad(nuevaEdad: String): void 
  {
    if(!isNaN(Number(nuevaEdad)) && Number(nuevaEdad) > 0) //
      this.edad = Number(nuevaEdad);
    else
      this.edad = -1;
  }

  cambiarDisabled(): void
  {
    this.nuevaEdadProperty = !this.nuevaEdadProperty;
  }
}