import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router'; // Para las rutas hijas
import { Empleado } from '../empleado/empleado';


@Component({
    selector: 'empleados',
    templateUrl: './empleados.html',
    styleUrl: './empleados.css',
    imports: [RouterOutlet, Empleado]
})

export class Empleados {

}