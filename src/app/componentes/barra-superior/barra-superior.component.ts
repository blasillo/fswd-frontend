import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AvatarModule} from "primeng/avatar";
import {ConfirmDialogModule} from "primeng/confirmdialog";

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  standalone: true,
  imports: [
    AvatarModule,
    ConfirmDialogModule
  ],
  styleUrl: './barra-superior.component.css'
})
export class BarraSuperiorComponent implements OnInit {

  iniciales: string = 'AAA'

  constructor(
    private router:Router
  ) {
  }
  ngOnInit(): void {
  }

}
