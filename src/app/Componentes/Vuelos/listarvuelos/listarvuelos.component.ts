import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VuelosService } from '../../../Service/vuelos.service';

@Component({
  selector: 'app-listarvuelos',
  imports: [CommonModule, HttpClientModule,],//CommonModule
  templateUrl: './listarvuelos.component.html',
  styleUrl: './listarvuelos.component.css'
})

export class ListarvuelosComponent {
  constructor(private vuelosservice: VuelosService){
    this.vuelosservice.getVuelos();
  }

  get listVuelos(){
    return this.vuelosservice.listarvuelos;
  }

  getVuelo(id:number){
    console.log("listarvuelos.component.ts getVuelo(id:number) :: "+id);
  }

  eliminarVuelo(id:any){
    console.log(id);
    //this.vuelosservice.deleteVuelo(id);
  }
}