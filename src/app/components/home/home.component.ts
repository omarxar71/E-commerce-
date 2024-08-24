import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  allProducts:Product[]=[];
  constructor(private _ProductsService:ProductsService) { 

  }
  getProducts=()=>{
    this._ProductsService.getProductAPI().subscribe({
      next:(res)=>{
        this.allProducts=res.data;
        

      }, 
      error:(err)=>{
        console.log(err);
      }
    })
  };
  ngOnInit(): void {
    this.getProducts()
  }
}
