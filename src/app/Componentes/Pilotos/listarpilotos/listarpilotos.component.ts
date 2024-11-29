import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PilotosService } from '../../../Service/pilotos.service';

@Component({
  selector: 'app-listarpilotos',
  imports: [CommonModule],
  templateUrl: './listarpilotos.component.html',
  styleUrl: './listarpilotos.component.css'
})
export class ListarpilotosComponent {
    //Contructor con dependencia de servicio
  constructor(private pilotosservice: PilotosService){
    //cuando inicie llamo al servicio que consume API
    this.pilotosservice.getPilotos();
  }

  get listPilotos(){
    return this.pilotosservice.listapilotos;
  }

  deletePiloto(id: any) {
    console.log(id);
    this.pilotosservice.deletePiloto(id);
  }  

}
