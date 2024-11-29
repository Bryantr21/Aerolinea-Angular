import { Routes } from '@angular/router';
import { ListarvuelosComponent } from './Componentes/Vuelos/listarvuelos/listarvuelos.component';
import { ListaravionesComponent } from './Componentes/Aviones/listaraviones/listaraviones.component';
import { ListarpilotosComponent } from './Componentes/Pilotos/listarpilotos/listarpilotos.component';
import { ListaraeropuertosComponent } from './Componentes/Aeropuertos/listaraeropuertos/listaraeropuertos.component';
import { ListarrutasComponent } from './Componentes/Rutas/listarrutas/listarrutas.component';
import { EditarvueloComponent } from './Componentes/Vuelos/editarvuelo/editarvuelo.component';
import { EditaravionComponent } from './Componentes/Aviones/editaravion/editaravion.component';
import { EditarpilotoComponent } from './Componentes/Pilotos/editarpiloto/editarpiloto.component';
import { EditaraeropuertoComponent } from './Componentes/Aeropuertos/editaraeropuerto/editaraeropuerto.component';
import { EditarrutaComponent } from './Componentes/Rutas/editarruta/editarruta.component';
import { InsertarvueloComponent } from './Componentes/Vuelos/insertarvuelo/insertarvuelo.component';
import { InsertaravionComponent } from './Componentes/Aviones/insertaravion/insertaravion.component';
import { InsertarpilotoComponent } from './Componentes/Pilotos/insertarpiloto/insertarpiloto.component';
import { InsertaraeropuertoComponent } from './Componentes/Aeropuertos/insertaraeropuerto/insertaraeropuerto.component';
import { InsertarrutaComponent } from './Componentes/Rutas/insertarruta/insertarruta.component';

export const routes: Routes = [
    {path:'', component: ListarvuelosComponent},
    {path:'listaraviones', component: ListaravionesComponent},
    {path:'listarpilotos', component: ListarpilotosComponent},
    {path:'listaraeropuertos', component: ListaraeropuertosComponent},
    {path:'listarrutas', component: ListarrutasComponent},
    {path:'editarvuelo', component: EditarvueloComponent},
    {path:'editaravion', component: EditaravionComponent},
    {path:'editarpiloto', component: EditarpilotoComponent},
    {path:'editaraeropuerto', component: EditaraeropuertoComponent},
    {path:'editarruta', component: EditarrutaComponent},
    {path:'insertarvuelo', component: InsertarvueloComponent},
    {path:'insertaravion', component: InsertaravionComponent},
    {path:'insertarpiloto', component: InsertarpilotoComponent},
    {path:'insertaraeropuerto', component: InsertaraeropuertoComponent},
    {path:'insertarruta', component: InsertarrutaComponent},
];    
