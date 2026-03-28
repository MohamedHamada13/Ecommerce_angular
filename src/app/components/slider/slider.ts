import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider {
  sliderImages = [
    {id: 1, label: 'First Slide', description: 'Some representative placeholder content for the second slide.', image: 'img1.jpg'},
    {id: 2, label: 'Second Slide', description: 'Some representative placeholder content for the second slide.', image: 'img2.jpg'},
    {id: 3, label: 'Third Slide', description: 'Some representative placeholder content for the third slide.', image: 'img3.jpg'}
  ]
}
