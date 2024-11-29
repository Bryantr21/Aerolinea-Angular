import { Routes } from '@angular/router';
import { ListaraeropuertosComponent } from './Componentes/Aeropuertos/listaraeropuertos/listaraeropuertos.component';
import { InsertarpilotoComponent } from './Componentes/Pilotos/insertarpiloto/insertarpiloto.component';
import { ListarpilotosComponent } from './Componentes/Pilotos/listarpilotos/listarpilotos.component';
import { EditarpilotoComponent } from './Componentes/Pilotos/editarpiloto/editarpiloto.component';

export const routes: Routes = [

//Ruta a la lista de camiones
    {path: '', component: ListaraeropuertosComponent},

    {path: 'listaraeropuertos', component: ListaraeropuertosComponent},
    {path: 'insertarpilotos', component: InsertarpilotoComponent },  
    {path: 'listarpilotos', component: ListarpilotosComponent },
    {path: 'editarpiloto/:id', component: EditarpilotoComponent },    
    
];
