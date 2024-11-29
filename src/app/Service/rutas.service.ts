import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class RutasService {
  public listarutas: any[] = [];
  public ruta: any;
  constructor(private http: HttpClient) {
    this.listarutas = [];
  }
  getRutas() {
    this.http.get('http://localhost:5202/api/Rutas').subscribe((data: any) => {
      console.log(data);
      this.listarutas = data;
    });
  }
  getRuta(id: number) {
    this.http.get('http://localhost:5202/api/Rutas/' + id).subscribe((data: any) => {
      console.log(data);
      this.ruta = data;
    });
  }
  insertRuta(origen_ID: number, destino_ID: number, tiempo_Vuelo: number) {
    this.http
      .post('http://localhost:5202/api/Rutas/', {
        iD_Ruta: 0,
        origen_ID: origen_ID,
        destino_ID: destino_ID,
        tiempo_Vuelo: tiempo_Vuelo,
      })
      .subscribe((response: any) => {
        if (response.respuesta.toUpperCase().includes('ERROR')) {
          //Sweet Alert
          Swal.fire('Error', response.respuesta, 'error');
        } else {
          Swal.fire('Correcto', response.respuesta, 'success').then(() => {
            window.location.replace('/listarrutas');
          });
        }
      });
  }
  updateRuta(
    ID: number,
    origen_ID: number,
    destino_ID: number,
    tiempo_Vuelo: number
  ) {
    this.http
      .put('http://localhost:5202/api/Rutas/'+ID, {
        iD_Ruta: ID,
        origen_ID: origen_ID,
        destino_ID: destino_ID,
        tiempo_Vuelo: tiempo_Vuelo,
      })
      .subscribe((response: any) => {
        if (response.respuesta.toUpperCase().includes('ERROR')) {
          //Sweet Alert
          Swal.fire('Error', response.respuesta, 'error');
        } else {
          Swal.fire('Correcto', response.respuesta, 'success').then(() => {
            window.location.replace('/listarrutas');
          });
        }
      });
  }
  deleteRuta(id: any) {
    const swalWithTailwindButtons = Swal.mixin({
      customClass: {
        confirmButton:
          'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
        cancelButton:
          'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
      },
      buttonsStyling: false,
    });
    swalWithTailwindButtons
      .fire({
        title: 'Estás seguro?',
        text: 'Esta acción no se puede revertir',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Siuuuuuu',
        cancelButtonText: 'Tons no',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.http
            .delete('http://localhost:5202/api/Rutas' + id)
            .subscribe((response: any) => {
              console.log(response);
              if (response.respuesta.toUpperCase().includes('ERROR')) {
                swalWithTailwindButtons.fire({
                  title: 'Error',
                  text: response.respuesta,
                  icon: 'error',
                });
              } else {
                if (
                  response.respuesta.toUpperCase().includes('IDENTIFICADOR')
                ) {
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
