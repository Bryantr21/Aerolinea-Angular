import { Component, ElementRef, ViewChild } from '@angular/core';
import { AvionesService } from '../../../Service/aviones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editaravion',
  imports: [],
  templateUrl: './editaravion.component.html',
  styleUrl: './editaravion.component.css'
})
export class EditaravionComponent {
  private id_param: any;
  public ID_Avion: number = 0;

  @ViewChild('codigo') private codigo!: ElementRef;
  @ViewChild('modelo') private modelo!: ElementRef;
  @ViewChild('horas_vuelo') private horas_vuelo!: ElementRef;
  @ViewChild('capacidad') private capacidad!: ElementRef;
  @ViewChild('disponiblidad') private disponibilidad!: ElementRef;

  constructor(private service: AvionesService, private router: ActivatedRoute){
    
    this.id_param = this.router.params.subscribe((params) => {
      console.log("id recuperado : "  + params['id']);
      this.ID_Avion = params['id'];
      this.service.getAvion(this.ID_Avion);
    })
  }

  get avion(){
    return this.service.avion;
  }

  guardar(){

    const codigo = this.codigo.nativeElement.value;
    const modelo = this.modelo.nativeElement.value;
    const horas_vuelo = this.horas_vuelo.nativeElement.value;
    const capacidad = this.capacidad.nativeElement.value;
    const disponibilidad = this.disponibilidad.nativeElement.value;
    this.service.updateAvion(
      this.ID_Avion,
      codigo,
      modelo,
      horas_vuelo,
      capacidad,
      disponibilidad
    );

  };
}
