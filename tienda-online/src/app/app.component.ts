import { Component } from '@angular/core';
import { ProductListComponent } from "./product-list/product-list.component";
import { MainComponent } from "./main/main.component";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from './menu/menu.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [NgbDropdownModule, ProductListComponent, MainComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda-online';
}
