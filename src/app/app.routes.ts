import { Routes } from '@angular/router';
import { ListaraeropuertosComponent } from './Componentes/Aeropuertos/listaraeropuertos/listaraeropuertos.component';

export const routes: Routes = [

//Ruta a la lista de camiones
{path: '', component: ListaraeropuertosComponent},

{path: 'listaraeropuertos', component: ListaraeropuertosComponent},

];
