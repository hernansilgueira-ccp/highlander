import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() images: string[] = []; // Recibe las imágenes del producto
  @Input() description: string[] = [];
  @Input() price: string[] = [];
  @Input() name: string[] = [];
  @Input() products: any[] = [];
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  moveToNext(): void {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  moveToPrev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else if (this.currentIndex >= this.products.length){
      this.currentIndex = this.products.length - 1;
    }else{
      this.products.length = 1;
      
    }
  }
}
