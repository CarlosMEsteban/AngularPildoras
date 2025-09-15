
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
  private edad = 30;
  empresa = "Google";

  getEdad(): number {
    return this.edad;
  }
}
