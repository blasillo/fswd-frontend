import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BarraSuperiorComponent} from "./componentes/barra-superior/barra-superior.component";
import {ListadoTareasComponent} from "./componentes/listado-tareas/listado-tareas.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule,
    BarraSuperiorComponent,
    ListadoTareasComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-ui';
}
