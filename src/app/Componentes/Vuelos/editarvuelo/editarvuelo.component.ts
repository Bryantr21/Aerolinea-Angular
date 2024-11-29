import { Component, ElementRef, ViewChild } from '@angular/core';
import { VuelosService } from '../../../Service/vuelos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarvuelo',
  imports: [],
  templateUrl: './editarvuelo.component.html',
  styleUrl: './editarvuelo.component.css'
})



export class EditarvueloComponent {
  private id_param: any;
  public id_vuelo: number = 0;
  selectFile: File | null = null;

  @ViewChild('iD_vuelo') private iD_vuelo!: ElementRef;
  @ViewChild('ruta_ID') private ruta_ID!: ElementRef;
  @ViewChild('num_Vuelo') private num_Vuelo!: ElementRef;
  @ViewChild('fecha_vuelo') private fecha_vuelo!: ElementRef;
  @ViewChild('hora_vuelo') private hora_vuelo!: ElementRef;
  @ViewChild('piloto_ID') private piloto_ID!: ElementRef;
  @ViewChild('avion_ID') private avion_ID!: ElementRef;
  @ViewChild('estatus') private estatus!: ElementRef;
  @ViewChild('avion') private avion!: ElementRef;
  @ViewChild('piloto') private piloto!: ElementRef;
  @ViewChild('ruta') private ruta!: ElementRef;
  
  [x: string]: any;

  constructor(
    private service: VuelosService,
    private router: ActivatedRoute
  ){
    this.id_param = this.router.params.subscribe((params)=>{
      this.id_vuelo = params['id'];
      console.log('ID Recupero: ' + this.id_vuelo);
      this.service.getVuelo(this.id_vuelo);
    });
  }  

  guardar(){}
}

