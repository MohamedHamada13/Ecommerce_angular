import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Slider } from './components/slider/slider';

@Component({
  selector: 'app-root',
  imports: [Navbar, Slider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ecommerce-angular');
}
