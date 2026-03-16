import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Slider } from './components/slider/slider';
import { ProductCard } from './components/product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [Navbar, Slider, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ecommerce-angular');
}
