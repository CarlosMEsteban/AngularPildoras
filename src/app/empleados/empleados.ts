import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router'; // Para las rutas hijas



@Component({
    selector: 'empleados',
    templateUrl: './empleados.html',
    styleUrl: './empleados.css',
    imports: [RouterOutlet]
})

export class Empleados {

}