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
    nombre: string,
    municipio: string,
    estado: string,
    pais: string
  ) {
    this.http
      .post('http://localhost:5202/api/Aeropuertos/', {
        iD_Aeropuerto: 0,
        nombre: nombre,
        municipio: municipio,
        estado: estado,
        pais: pais,
      })
      .subscribe(
        (response: any) => {
          // Verifica si la respuesta contiene el mensaje de éxito
          console.log('Response:', response); // Verifica la estructura de la respuesta

          const mensaje = response?.message || ''; // Usamos `message` en lugar de `respuesta`
          
          if (mensaje.toUpperCase().includes('ERROR')) {
            // Muestra un alert de error si la respuesta contiene "ERROR"
            Swal.fire('Error', mensaje, 'error');
          } else {
            // Muestra un alert de éxito si la respuesta contiene un mensaje de éxito
            Swal.fire('Correcto', mensaje, 'success').then(() => {
              window.location.replace('/listaraeropuertos');
            });
          }
        },
        (error) => {
          // Maneja cualquier error de la API (por ejemplo, problemas de conexión)
          Swal.fire('Error', 'Hubo un problema al conectar con la API', 'error');
        }
      );
  }

  getAeropuertos() {
    this.http.get('http://localhost:5202/api/Aeropuertos/').subscribe((data: any) => {
      console.log(data);
      this.listaeropuestos = data;
    });
  }

  getAeropuerto(id: number) {
    this.http.get('http://localhost:5202/api/Aeropuertos/' + id).subscribe((data: any) => {
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
          // Llamada a la API para eliminar el aeropuerto
          this.http
            .delete('http://localhost:5202/api/Aeropuertos/' + id)
            .subscribe((response: any) => {
              console.log(response);
              const mensaje = response?.message || ''; // Usamos el mensaje de respuesta

              if (mensaje.toUpperCase().includes('ERROR')) {
                swalWithTailwindButtons.fire({
                  title: 'Error',
                  text: mensaje,
                  icon: 'error',
                });
              } else {
                if (mensaje.toUpperCase().includes('IDENTIFICADOR')) {
                  swalWithTailwindButtons.fire({
                    title: 'Ops!',
                    text: mensaje,
                    icon: 'info',
                  });
                } else {
                  swalWithTailwindButtons
                    .fire({
                      title: 'Eliminado',
                      text: mensaje,
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
