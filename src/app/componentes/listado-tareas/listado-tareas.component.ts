import {Component, OnInit} from '@angular/core';
import {Tarea} from "../../modelos/tarea";
import {TareaService} from "../../servicios/tarea.service";
import {ButtonModule} from "primeng/button";
import {ProgressBarModule} from "primeng/progressbar";
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-listado-tareas',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ProgressBarModule
  ],
  templateUrl: './listado-tareas.component.html',
  styleUrl: './listado-tareas.component.css'
})
export class ListadoTareasComponent  implements OnInit {

  tareas!: Tarea[];


  email: string = 'formacion@eclap.jcyl.es';

  constructor(
    private tareasSrv: TareaService
  ) { }

  ngOnInit(): void {
    this.listadoTareas();

  }


  listadoTareas () {
    this.tareasSrv.listadoTareas( this.email ).subscribe(
      response =>{
        this.tareas = response as Tarea[]
      },
      error => {
        console.error ( error.message )
      }
    );
  }

}
