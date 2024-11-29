import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeropuertosService } from '../../../Service/aeropuertos.service';

@Component({
  selector: 'app-listaraeropuertos',
  standalone: true, // Es un componente standalone
  imports: [CommonModule], // Agrega HttpClientModule aquí
  templateUrl: './listaraeropuertos.component.html',
  styleUrls: ['./listaraeropuertos.component.css'],
})
export class ListaraeropuertosComponent {
  constructor(private service: AeropuertosService) {
    this.service.getAeropuertos();
  }

  get listAeropuertos() {
    return this.service.listaeropuestos;
  }

  eliminaraeropuerto(id: any) {
    this.service.deleteAeropuerto(id);  }
}
