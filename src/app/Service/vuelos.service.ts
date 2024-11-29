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
    estatus: boolean
   ){

   }
}
