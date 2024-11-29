import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PilotosService {
  public listapilotos: any [] =[];
  public piloto:any;
  
    constructor(private http:HttpClient) { 
      this.listapilotos=[];
    }
    getPilotos(){
      console.log("da");
      this.http.get('http://localhost:5202/api/Pilotos').subscribe((data:any)=>{
        console.log(data);
        this.listapilotos=data;
      });
    }
    getPiloto(id:number){
      this.http.get('http://localhost:5202/api/Pilotos'+id).subscribe((data:any)=>{
        console.log(data);
        this.piloto=data;
      });
    }
  
  
}
