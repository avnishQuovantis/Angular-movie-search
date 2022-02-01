import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  currentSlide = 0;
  constructor() {}
  nextSlide() {
    let current = this.currentSlide < 2 ? this.currentSlide + 1 : 0;
    this.currentSlide = current;
  }
  prevSlide() {
    let current = this.currentSlide > 0 ? this.currentSlide - 1 : 2;
    this.currentSlide = current;
  }
}
