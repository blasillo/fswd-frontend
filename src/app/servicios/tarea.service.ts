import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  baseUrl = 'http://localhost:8080'

  constructor(private http:HttpClient) { }


  public listadoTareas(userEmail:string) {
    return this.http.get(
      `${this.baseUrl}/api/v1/tareas?correo=${userEmail}`,
      {
        responseType: 'json'
      }
    )
  }


}
