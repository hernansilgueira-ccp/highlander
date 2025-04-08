import { Component } from '@angular/core';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  searchTerm: string = '';  // Almacena el valor del campo de texto

    onSearch() {
      console.log("Buscando:", this.searchTerm);
  }
}
