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
  constructor(private service:PilotosService){
    this.service.getPilotos();
   }
   get listaPilotos(){
     return this.service.listapilotos;
   }
   
}
