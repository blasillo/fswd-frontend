import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import {Tarea} from "../../modelos/tarea";
import {TareaService} from "../../servicios/tarea.service";
import { CommonModule } from '@angular/common'
import {DialogModule} from "primeng/dialog";

import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
;

@Component({
  selector: 'app-listado-tareas',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ProgressBarModule,
    DialogModule, ButtonModule,
  ],
  templateUrl: './listado-tareas.component.html',
  styleUrl: './listado-tareas.component.css'
})
export class ListadoTareasComponent  implements OnInit {


  tareas!: Tarea[];
  dialogoVisible = false
  etiquetaAccion = 'Crear Tarea'

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

  mostrarFormulario() {
    this.dialogoVisible = true
    this.etiquetaAccion = 'Crear Tarea'
  }


}
