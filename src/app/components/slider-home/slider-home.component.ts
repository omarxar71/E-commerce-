import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SoldOutPipe } from '../../core/pipes/sold-out.pipe';
@Component({
  selector: 'app-slider-home',
  standalone: true,
  imports: [CarouselModule , SoldOutPipe],
  templateUrl: './slider-home.component.html',
  styleUrl: './slider-home.component.scss'
})
export class SliderHomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    autoplayTimeout:1000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
}
