import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutasService } from '../../../Service/rutas.service';

@Component({
  selector: 'app-editarruta',
  imports: [],
  templateUrl: './editarruta.component.html',
  styleUrl: './editarruta.component.css'
})
export class EditarrutaComponent {
  private id_param:any;
  public ID_Ruta:number=0;
  selectFile:File|null=null;
  
  @ViewChild('origen_ID') private origen_ID!:ElementRef;
  @ViewChild('destino_ID') private destino_ID!:ElementRef;
  @ViewChild('disponibilidad') private disponibilidad!:ElementRef;
  @ViewChild('tiempo_Vuelo') private tiempo_Vuelo!:ElementRef;
  constructor(private service:RutasService,private router:ActivatedRoute){
    this.id_param=this.router.params.subscribe((params)=>{
      console.log('ID Recupero: '+params['id']);
      this.ID_Ruta =params['id'];
      this.service.getRuta(this.ID_Ruta);
    });
  }
  get rutas(){
    return this.service.ruta;
  }
  guardar(){ 
        const origen_ID=this.origen_ID.nativeElement.value;
        const destino_ID=this.destino_ID.nativeElement.value;
        const tiempo_Vuelo=this.tiempo_Vuelo.nativeElement.value;
        this.service.updateRuta(
          this.ID_Ruta,
          origen_ID,
          destino_ID,
          tiempo_Vuelo);
    
  }
}
