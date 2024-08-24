import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Category } from '../../core/interfaces/product';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  allCat:Category[]=[];
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
