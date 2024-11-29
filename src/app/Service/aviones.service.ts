import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AvionesService {
  public listaaviones: any[] = [];
  public avion: any;
  constructor(private http: HttpClient) {
    this.listaaviones = [];
  }
  gatAviones() {
    this.http
      .get('http://localhost:5202/api/Aviones')
      .subscribe((data: any) => {
        console.log(data);
        this.listaaviones = data;
      });
  }
  getAvion(id: number) {
    this.http
      .get('http://localhost:5202/api/Aviones/' + id)
      .subscribe((data: any) => {
        console.log(data);
        this.avion = data;
      });
  }
  insertAvion(
    codigo: string,
    modelo: string,
    horas_vuelo: number,
    capacidad: number,
    disponibilidad: string
  ) {
    let bool: boolean = true;
    bool = disponibilidad == '0' ? false : true;

    this.http
      .post('http://localhost:5202/api/Aviones', {
        iD_Avion: 0,
        codigo: codigo,
        modelo: modelo,
        horas_vuelo: horas_vuelo,
        capacidad: capacidad,
        disponibilidad: bool,
      })
      .subscribe((response: any) => {
        if (response.respuesta.toUpperCase().includes('EROR')) {
          //Sweet Alert
          Swal.fire('Error', response.respuesta, 'error');
        } else {
          Swal.fire('Correcto', response.respuesta, 'success').then(() => {
            window.location.replace('/listaraviones');
          });
        }
      });
  }
  updateAvion(
    ID: number,
    codigo: string,
    modelo: string,
    horas_vuelo: number,
    capacidad: number,
    disponibilidad: string
  ) {
    let bool: boolean = true;
    bool = disponibilidad == '0' ? false : true;

    this.http
      .put('http://localhost:5202/api/Aviones/updateAvion/', {
        iD_Avion: ID,
        codigo: codigo,
        modelo: modelo,
        horas_vuelo: horas_vuelo,
        capacidad: capacidad,
        disponibilidad: bool,
      })
      .subscribe((response: any) => {
        if (response.respuesta.toUpperCase().includes('ERROR')) {
          //Sweet Alert
          Swal.fire('Error', response.respuesta, 'error');
        } else {
          Swal.fire('Correcto', response.respuesta, 'success').then(() => {
            window.location.replace('/listaraviones');
          });
        }
      });
  }
  deleteAvion(id: any) {
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
            .delete('http://5202/api/Aviones/delete/' + id)
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
