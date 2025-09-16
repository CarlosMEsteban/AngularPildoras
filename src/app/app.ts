import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Empleados } from './empleados/empleados';
import { Productos } from './productos/productos';


// Decorador
@Component({
  selector: 'app-root', // Es lo que se pone en el index.html para que se cargue este componente
  imports: [RouterOutlet, Empleados, Productos],
  templateUrl: './app.html', // La plantilla HTML de este componente está en el archivo app.html
  styleUrl: './app.css',  
})

//
export class App {
  protected title = 'MiPrimerraApp'; // Luego puedo acceder a esta propiedad desde la plantilla HTML con {{ title }}, que mostrará 'MiPrimerraApp'
  protected saludo='Enhorabuena tu aplicación se ejecutó Well'; // Luego puedo acceder a esta propiedad desde la plantilla HTML con {{ saludo }}, que mostrará 'Hola a todos'
}
