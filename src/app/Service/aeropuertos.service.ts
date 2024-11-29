import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root', // Esto asegura que el servicio esté disponible globalmente
})
export class AeropuertosService {
  public listaeropuestos: any[] = [];
  public aeropuerto: any;
  constructor(private http: HttpClient) {
    this.listaeropuestos = [];
  }


  insertAeropuerto(
  //iD_Aeropuerto: 0,
  nombre: string,
  municipio: string,
  estado: string,
  pais: string
  ){
  
    //realizo mi peticion http POST http://localhost:5202/api/Aeropuertos/
    this.http.post('http://localhost:5202/api/Aeropuertos/',
      {
    iD_Aeropuerto: 0,
    nombre: nombre,
    municipio: municipio,
    estado: estado,
    pais: pais      })
      .subscribe((response: any)=>{

        console.log('Response:', response); // Depura el contenido
        const respuesta = response?.respuesta || '';

  if(response.respuesta.toUpperCase().includes('ERROR')){
    ///Sweet Alet
    Swal.fire('Error',response.respuesta,'error');
  }else{
  
   Swal.fire('Correcto',response.respuesta,'success').then(()=>
   {
  window.location.replace('/listaraeropuertos')
   }); 
  }
  
      });
  }
  

  getAeropuertos() {
    this.http.get('http://localhost:5202/api/Aeropuertos/').subscribe((data: any) => {
      console.log(data);
      this.listaeropuestos = data;
    });
  }

  getAeropuerto(id:number){
    this.http.get('http://localhost:5202/api/Aeropuertos/'+id).subscribe((data: any) => {
      console.log(data);
      this.aeropuerto = data;
    });
  }



  deleteAeropuerto(id: any) {
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
        confirmButtonText: 'Si',
        cancelButtonText: 'Operacion cancelada',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // Llamada a la API para eliminar el camión
          this.http
            .delete('http://localhost:5202/api/Aeropuertos/' + id)
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
