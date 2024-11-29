import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // Esto asegura que el servicio esté disponible globalmente
})
export class AeropuertosService {
  public listaeropuestos: any[] = [];

  constructor(private http: HttpClient) {
    this.listaeropuestos = [];
  }

  getAeropuertos() {
    this.http.get('http://localhost:5202/api/Aeropuertos/').subscribe((data: any) => {
      console.log(data);
      this.listaeropuestos = data;
    });
  }
}
