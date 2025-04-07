import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from "../carousel/carousel.component";


@Component({
  selector: 'app-product-list',
  imports: [CommonModule, NgbCarouselModule, CarouselComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [

    { id: 91, name: 'Camisa', description: 'Camisa de seda fina y alta costura', price: 250,image:['images/camisa.jpeg'] },
    { id: 2, name: 'Mochila', description: 'Mochila super resistente y a prueba de agua', price: 400,image:['images/mochila.jpeg'] },
    { id: 3, name: 'Zapato',description: 'Zapato de calidad resistente a prueba de fuego',  price: 600,image:['images/zapato.jpeg'] }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
