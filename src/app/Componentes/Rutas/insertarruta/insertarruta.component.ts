import { Component, ElementRef, ViewChild } from '@angular/core';
import { RutasService } from '../../../Service/rutas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insertarruta',
  imports: [],
  templateUrl: './insertarruta.component.html',
  styleUrl: './insertarruta.component.css'
})
export class InsertarrutaComponent {
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
        this.service.insertRuta(
          origen_ID,
          destino_ID,
          tiempo_Vuelo);
    
  }
}
