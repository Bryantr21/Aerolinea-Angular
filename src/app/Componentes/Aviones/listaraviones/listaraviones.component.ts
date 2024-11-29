import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvionesService } from '../../../Service/aviones.service';

@Component({
  selector: 'app-listaraviones',
  imports: [CommonModule],
  templateUrl: './listaraviones.component.html',
  styleUrl: './listaraviones.component.css'
})
export class ListaravionesComponent {

  constructor(private service: AvionesService){
    this.service.gatAviones();
  }

  get listAviones(){
    return this.service.listaaviones;
  }

  EliminiarAvion(id: any){
    this.service.deleteAvion(id)
  }


}
