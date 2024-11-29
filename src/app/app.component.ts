import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FotterComponent } from "./Componentes/fotter/fotter.component";
import { NavbarComponent } from "./Componentes/Aeropuertos/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FotterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aerolinea-Angular';
}
