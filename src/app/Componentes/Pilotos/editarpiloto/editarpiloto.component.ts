import { Component, ElementRef, ViewChild } from '@angular/core';
import { PilotosService } from '../../../Service/pilotos.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarpiloto',
  imports: [],
  templateUrl: './editarpiloto.component.html',
  styleUrl: './editarpiloto.component.css'
})
export class EditarpilotoComponent {
  private id_param: any;
    public ID_Piloto: number = 0;
    selectFile: File | null = null;

    
  @ViewChild('Codigo') private codigo!: ElementRef;
  @ViewChild('Nombre') private nombre!: ElementRef;
  @ViewChild('Apellido') private apellido!: ElementRef;
  @ViewChild('Sexo') private sexo!: ElementRef;
  @ViewChild('Horas_vuelo') private horas_vuelo!: ElementRef;
  @ViewChild('Disponibilidad') private disponibilidad!: ElementRef;

  
  constructor(private service: PilotosService, private route: ActivatedRoute){
    this.id_param = this.route.params.subscribe(params => {
      console.log('ID Recuperado' + params['id_param']);
      this.ID_Piloto = params['id'];
      this.service.getpilotos(this.ID_Piloto);
    })
  }

  get pilotos(){
    return this.service.pilotos;
  }

  onFileSelected($event: any){
    this.selectFile =  $event.target.files[0];
  }

  guardar(){
      var horaspiloto = this.service.gethorasPilotos(this.ID_Piloto);

      const codigo =  this.codigo.nativeElement.value;
      const nombre =  this.nombre.nativeElement.value;
      const apellido =  this.apellido.nativeElement.value;
      const sexo =  this.sexo.nativeElement.value;
      const horas_vuelo =  horaspiloto;
      const disponibilidad =  this.disponibilidad.nativeElement.value;
      this.service.updatePiloto(this.ID_Piloto, codigo, nombre, apellido, sexo, disponibilidad);
      Swal.fire("Error", "Debes seleccionar una imagen", "error");
    
  }


}
