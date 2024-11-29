import { Component } from '@angular/core';
import { VuelosService } from '../../../Service/vuelos.service';

@Component({
  selector: 'app-listarvuelos',
  imports: [],
  templateUrl: './listarvuelos.component.html',
  styleUrl: './listarvuelos.component.css'
})
export class ListarvuelosComponent {
  constructor(private vuelosservice: VuelosService){
    
  }
}
