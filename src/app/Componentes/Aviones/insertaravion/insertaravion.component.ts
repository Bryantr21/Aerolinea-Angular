import { Component, ElementRef, ViewChild } from '@angular/core';
import { AvionesService } from '../../../Service/aviones.service';

@Component({
  selector: 'app-insertaravion',
  imports: [],
  templateUrl: './insertaravion.component.html',
  styleUrl: './insertaravion.component.css',
})
export class InsertaravionComponent {
  @ViewChild('codigo') private codigo!: ElementRef;
  @ViewChild('modelo') private modelo!: ElementRef;
  @ViewChild('horas_vuelo') private horas_vuelo!: ElementRef;
  @ViewChild('capacidad') private capacidad!: ElementRef;

  constructor(private serivce: AvionesService) {}

  guardar() {
    const codigo = this.codigo.nativeElement.value;
    const modelo = this.modelo.nativeElement.value;
    const horas_vuelo = this.horas_vuelo.nativeElement.value;
    const capacidad = this.capacidad.nativeElement.value;
    const disponibilidad = '0';
    this.serivce.insertAvion(
      codigo,
      modelo,
      horas_vuelo,
      capacidad,
      disponibilidad
    );
  }
}
