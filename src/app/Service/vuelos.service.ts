import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  public listarvuelos: any[] = [];

  public vuelo: any;

  constructor(private http: HttpClient) {
    this.listarvuelos = [];
   }
   getVuelos() {
    this.http
      .get('')
      .subscribe((data: any) => {
        console.log(data);
        this.listarvuelos = data;
      });
   }
   getVuelo(id: number){
    this.http.get(''+id).subscribe((data: any) => {
      console.log(data);
      this.vuelo = data;
    });
   }
   insertVuelo(
    ruta_ID: number,
    num_Vuelo: string,
    fecha_vuelo: Date,
    hora_vuelo: number,
    piloto_ID: number,
    avion_ID: number,
    estatus: boolean
   ){

   }
}
