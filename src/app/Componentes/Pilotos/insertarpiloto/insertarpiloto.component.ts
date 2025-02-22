import { Component, ElementRef, ViewChild } from '@angular/core';
import { PilotosService } from '../../../Service/pilotos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertarpiloto',
  imports: [],
  templateUrl: './insertarpiloto.component.html',
  styleUrl: './insertarpiloto.component.css'
})
export class InsertarpilotoComponent {
  private id_param: any;
  public ID_Piloto: number = 0;
  selectFile: File | null = null;  

  @ViewChild('Codigo') private codigo!: ElementRef;
  @ViewChild('Nombre') private nombre!: ElementRef;
  @ViewChild('Apellido') private apellido!: ElementRef;
  @ViewChild('Sexo') private sexo!: ElementRef;
  @ViewChild('Horas_vuelo') private horas_vuelo!: ElementRef;
  @ViewChild('Disponibilidad') private disponibilidad!: ElementRef;

  
  //Constructor de referencia al servico que consumira las API
  constructor(private pilotoservice: PilotosService){}

  onFileSelected($event: any){
    this.selectFile =  $event.target.files[0];
  }
  
  guardar(){

     const codigo =  this.codigo.nativeElement.value;
     if(this.validar_codigo(codigo)){
      const nombre =  this.nombre.nativeElement.value;
      const apellido =  this.apellido.nativeElement.value;
      const sexo =  this.sexo.nativeElement.value;
      const horas_vuelo =  0;
      const disponibilidad =  this.disponibilidad.nativeElement.value;
      
      this.pilotoservice.insertarPiloto(codigo, nombre, apellido, sexo, horas_vuelo, disponibilidad);
     }else{
      Swal.fire("Codigo de piloto incorrecto", "El formato del codigo del piloto debe ser PA-0000", "info");
     }
      
    };

      validar_codigo(codigo: string){
        var patron = /^PA-\d{4}$/;
        
        if (patron.test(codigo)){
            return true;
        }else{
            return false;
        }
    
      }
}
