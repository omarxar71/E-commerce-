import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from "../../layout/main-layout/main-layout.component";
import { SliderHomeComponent } from "../slider-home/slider-home.component";
import { SliderCatComponent } from "../slider-cat/slider-cat.component";
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SoldOutPipe } from "../../core/pipes/sold-out.pipe";
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',

  standalone: true,
  imports: [RouterModule, MainLayoutComponent, SliderHomeComponent, SliderCatComponent, SoldOutPipe, SearchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit , OnDestroy{
private readonly _CartService=inject(CartService)
  cancelSubcription:Subscription=new Subscription();
  allProducts:Product[]=[];
  searchterm:string='';
  constructor(private _ProductsService:ProductsService) { 

  }
  private readonly _cartService=inject(CartService);
  private readonly _ToastrService = inject(ToastrService)
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
        this._cartService.cartCounter.next(res.numOfCartItems)

        this._ToastrService.success('product added to the cart' , 'success' , {progressBar:true})
      
      } , 
      error:(err)=>{
        console.log(err)
      }
    })
  }
  ngOnDestroy(): void {
  }
}
