import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { error } from 'console';
import { response } from 'express';
import { AeropuertosService } from '../../../Service/aeropuertos.service';

@Component({
  selector: 'app-insertaraeropuerto',
  imports: [],
  templateUrl: './insertaraeropuerto.component.html',
  styleUrl: './insertaraeropuerto.component.css'
})
export class InsertaraeropuertoComponent {
 //Referencia a los elementos HTML
 @ViewChild('nombre') private nombre!: ElementRef; //tanto @ViewChild como ElementRef 
 //se importan desde @angular/core
 @ViewChild('municipio') private municipio!: ElementRef;
 @ViewChild('estado') private estado!: ElementRef;
 @ViewChild('pais') private pais!: ElementRef;
 //Constructor que haga referencia al servicio que consumira las apis de la imagen y de insertar camion
 constructor(private service: AeropuertosService){

 }

 guardar(){
  //metodo para envir mi camion al servidor inclut¿yendo imagen al servidor API
     //Asigno los valores de las variables que se enviaran en la peticion
    const nombre = this.nombre.nativeElement.value;
    const municipio = this.municipio.nativeElement.value;
    const estado = this.estado.nativeElement.value;
    const pais = this.pais.nativeElement.value;
   
    //invoco mi servicio que inserta en el servidor mediante la API
    this.service.insertAeropuerto(
       nombre,
       municipio,
      estado,
      pais    
    );
  }

}
