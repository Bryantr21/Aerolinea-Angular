import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RutasService } from '../../../Service/rutas.service';

@Component({
  selector: 'app-listarrutas',
  imports: [CommonModule],
  templateUrl: './listarrutas.component.html',
  styleUrl: './listarrutas.component.css'
})
export class ListarrutasComponent {
  constructor(private service:RutasService){
    this.service.getRutas();
   }
   get listaRutas(){
    return this.service.listarutas;
  }
  eliminarRuta(id:any){
    this.service.deleteRuta(id);
  }
}
