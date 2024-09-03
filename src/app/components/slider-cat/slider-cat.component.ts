import { Component } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider-cat',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './slider-cat.component.html',
  styleUrl: './slider-cat.component.scss'
})
export class SliderCatComponent {
  allCat:any[]=[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay:true,
    autoplayTimeout:1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }





  constructor(private _CategoriesService:CategoriesService) { }
  displayCategories=()=>{
    this._CategoriesService.getCategoriesAPI().subscribe({
      next:(res)=>{
        this.allCat=res.data;
        console.log(this.allCat);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  };
  ngOnInit(): void {
      this.displayCategories();
  }
}
