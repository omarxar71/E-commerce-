import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CartData } from '../../core/interfaces/cart.interface';
import { routes } from '../../app.routes';
import { RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],


templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cart!:CartData;
  cartOutsideData!:CartData;
  isLoading:boolean=true
private readonly _cart = inject(CartService)
getCartService=()=>{
this._cart.GetLoggedUserCart().subscribe({
  next:(res)=>{
    console.log(res);
    this.cart=res.data;
    this.cartOutsideData=res;
    this.isLoading=false;
    
  },
  error:(err)=>{
    console.log(err);
    this.isLoading=false;
   
  }
})

}
DeleteProduct = (id:string)=>{
  this._cart.RemoveSpecificCartItem(id).subscribe({
    next:(res)=>{
      console.log(res)
      this.cart=res.data;
    },
    error:(err)=>{
      console.log(err)
    }
  })
}

ngOnInit(): void {
    this.getCartService()
}

}
