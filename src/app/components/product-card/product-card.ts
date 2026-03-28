import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  products = [
    { id: 1, name: 'Smart Watch', price: 120, image: 'b-sunglass-sm.jpg', inStock: true },
    { id: 2, name: 'Classic Watch', price: 90, image: 'febreze-sm.jpg', inStock: false },
    { id: 3, name: 'Sport Watch', price: 150, image: 'girl-shoes-sm.jpg', inStock: true },
    { id: 4, name: 'Running Shoes', price: 120, image: 'w-sunglass-sm.jpg', inStock: true },
    { id: 5, name: 'Casual Shoes', price: 100, image: 'y-atary-sm.jpg', inStock: false }
  ];
}
