import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from "../../layout/main-layout/main-layout.component";
import { SliderHomeComponent } from "../slider-home/slider-home.component";
import { SliderCatComponent } from "../slider-cat/slider-cat.component";
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MainLayoutComponent, SliderHomeComponent, SliderCatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  allProducts:Product[]=[];
  constructor(private _ProductsService:ProductsService) { 

  }
  private readonly _cartService=inject(CartService);
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
  AddToCart=(productId:string)=>{
    this._cartService.AddProductToCart(productId).subscribe({
      next:(res)=>{
        console.log(res);
      } , 
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
