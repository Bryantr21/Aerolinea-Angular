import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class VuelosService {
  public listarvuelos: any[] = [];

  public vuelo: any;

  constructor(private http: HttpClient) {
    this.listarvuelos = [];
   }
   getVuelos() {
    this.http
      .get('http://localhost:5202/api/Vuelos')
      .subscribe((data: any) => {
        console.log(data);
        this.listarvuelos = data;
      });
   }
   getVuelo(id: number){
    console.log("el ID es "+id);
     this.http.get('http://localhost:5202/api/Vuelos/'+id).subscribe((data: any) => {
      this.vuelo = data;
      console.log(data);
      console.log(data.iD_vuelo);
    });
  }
  insertVuelo(
    ruta_ID: number,
    num_Vuelo: string,
    fecha_vuelo: Date,
    hora_vuelo: number,
    piloto_ID: number,
    avion_ID: number,
    estatus: string
  ) {
    let bool: boolean = true;
    bool = estatus == '0' ? false : true;

    this.http
      .post('', {
        iD_Vuelo: 0,
        ruta_ID: ruta_ID,
        num_Vuelo: num_Vuelo,
        fecha_vuelo: fecha_vuelo,
        hora_vuelo: hora_vuelo,
        piloto_ID: piloto_ID,
        avion_ID: avion_ID,
        estatus: bool,
      })
      .subscribe((response: any) => {
        //valido si tiene un error o no
        if (response.respuesta.toUpperCase().includes('ERROR')) {
          //Sweet Alert
          Swal.fire('Error', response.respuesta, 'error');
        } else {
          Swal.fire('Correcto', response.respuesta, 'success').then(() => {
            window.location.replace('/listarvuelos');
          });
        }
      });
  }
  updateVuelo(
    ID: number,
    ruta_ID: number,
    num_Vuelo: string,
    fecha_vuelo: Date,
    hora_vuelo: number,
    piloto_ID: number,
    avion_ID: number,
    estatus: string
  ) {
    let bool: boolean = true;
    bool = estatus == '0' ? false : true;

    this.http
      .put('', {
        iD_Vuelo: ID,
        ruta_ID: ruta_ID,
        num_Vuelo: num_Vuelo,
        fecha_vuelo: fecha_vuelo,
        hora_vuelo: hora_vuelo,
        piloto_ID: piloto_ID,
        avion_ID: avion_ID,
        estatus: bool,
      })
      .subscribe((response: any) => {
        //valido si tiene un error o no
        if (response.respuesta.toUpperCase().includes('ERROR')) {
          //Sweet Alert
          Swal.fire('Error', response.respuesta, 'error');
        } else {
          Swal.fire('Correcto', response.respuesta, 'success').then(() => {
            window.location.replace('/listarvuelos');
          });
        }
      });
  }
  deleteVuelo(id: any) {
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
          this.http.delete('' + id).subscribe((response: any) => {
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