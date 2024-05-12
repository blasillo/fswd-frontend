import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {TareaService} from "./servicios/tarea.service";
import {provideHttpClient} from "@angular/common/http";
import {ConfirmationService} from "primeng/api";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),ConfirmationService,
    TareaService]

};
