import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
 export class PilotosService {
  
    //Crear lista que recibe datos
    public listapilotos: any [] = [];
    public pilotos: any;
    constructor(private http: HttpClient) {
      this.listapilotos = [];
     }
  
     //consumir API
  
     getPilotos(){
      this.http.get('http://localhost:5167/api/Camiones').subscribe((data: any) => {
        console.log(data);
        this.listapilotos = data;
      });
     }
  
     getpilotos (id:number){
      this.http.get('http://localhost:5167/api/Camiones/'+ id).subscribe((response: any) => {
        console.log(response);
        this.listapilotos = response;
      })
     }
  
     uploadImage(FormData: FormData): Observable<string> {
        console.log(FormData);
        return this.http.post('http://localhost:5167/api/Camiones/upload', FormData).pipe(
          map((responsive: any) => {
            console.log(responsive);
            return responsive.uniqueFileName;
      })
        );
    }

    gethorasPilotos(id:number){
      this.http.get('http://localhost:5167/api/Camiones'+ id).subscribe((data: any) => {
        console.log(data);
        return data.Horas_vuelo;
      });
     }
  
  insertarPiloto(
    Codigo: string,                                
    Nombre: string,                                
    Apellido: string,                                 
    Sexo: string,                                 
    Horas_vuelo: number,                                 
    Disponibilidad: string)
  {
    let bool : Boolean = true;
    bool = Sexo == '0' ? false : true;
  
    let booldispo : Boolean = true;
    booldispo = Disponibilidad == '0' ? false : true;
  
    this.http.post('http://localhost:5167/api/Camiones/', {
      Codigo: Codigo,
      Nombre: Nombre,
      Apellido: Apellido,
      Sexo: bool,
      Horas_vuelo: Horas_vuelo,
      Disponibilidad: booldispo 
    }).subscribe((response: any) => {
      if(response.respuesta.upperCase().includes('ERROR')){
        Swal.fire("Error", response.respuesta, "error");
      }else{
        Swal.fire("Correcto", response.respuesta, "success").then(()=>{
          window.location.replace('/listarpilotos');
        });
      }
    })
  
  }
  
  
  updatePiloto(
    ID: Number,
    Codigo: string,                                
    Nombre: string,                                
    Apellido: string,                                 
    Sexo: string,                                        
    Disponibilidad: string)
  {  
    let bool : Boolean = true;
    bool = Sexo == '0' ? false : true;
  
    let booldispo : Boolean = true;
    booldispo = Disponibilidad == '0' ? false : true;
  
    this.http.put('http://localhost:5167/api/Camiones/'+ ID, {
      ID_Piloto: ID,
      Codigo: Codigo,
      Nombre: Nombre,
      Apellido: Apellido,
      Sexo: bool,
      Disponibilidad: booldispo
    }).subscribe((response: any) => {
      if(response.respuesta.upperCase().includes('ERROR')){
        Swal.fire("Error", response.respuesta, "error");
      }else{
        Swal.fire("Correcto", response.respuesta, "success").then(()=>{
          window.location.replace('/listarpilotos');
        });
      }
    })
  
  }
  
    deletePiloto(id: any) {
      const swalWithTailwindButtons = Swal.mixin({
        customClass: {
          confirmButton: 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
          cancelButton: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
        },
        buttonsStyling: false,
      });
  
      swalWithTailwindButtons
        .fire({
          title: 'Estás seguro?',
          text: 'Esta acción no se puede revertir',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'De acuerdo',
          cancelButtonText: 'Cancelar',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            // Llamada a la API para eliminar el camión
            this.http
              .delete('http://localhost:5167/api/Camiones/' + id)
              .subscribe((response: any) => {
                console.log(response);
                if (response.respuesta.toUpperCase().includes('ERROR')) {
                  swalWithTailwindButtons.fire({
                    title: 'Error',
                    text: response.respuesta,
                    icon: 'error',
                  });
                } else {
                  if (response.respuesta.toUpperCase().includes('IDENTIFICADOR')) {
                    swalWithTailwindButtons.fire({
                      title: 'Ops!',
                      text: response.respuesta,
                      icon: 'info',
                    });
                  } else {
                    swalWithTailwindButtons
                      .fire({
                        title: 'Eliminado',
                        text: response.respuesta,
                        icon: 'success',
                      })
                      .then(() => {
                        window.location.reload();
                      });
                  }
                }
              });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithTailwindButtons.fire({
              title: 'Cancelado',
              text: 'Tu operación ha sido cancelada',
              icon: 'info',
            });
          }
        });
    }
   
}

