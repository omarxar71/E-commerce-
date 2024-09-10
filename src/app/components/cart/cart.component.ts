import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CartData, CartProduct } from '../../core/interfaces/cart.interface';
import { routes } from '../../app.routes';
import { RouterEvent, RouterLink } from '@angular/router';
import { count } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],


templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private readonly toaster = inject(ToastrService)
  cart!:CartData | any;
  cartOutsideData!:CartData;
  isLoading:boolean=true;
private readonly _cart = inject(CartService)
getCartService=()=>{
this._cart.GetLoggedUserCart().subscribe({
  next:(res)=>{
    
    this.cart=res.data;
    this.cartOutsideData=res;
    this.isLoading=false;
    console.log(this.cart)
    
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
updataProductCount=(productid:string , count:number)=>{
  this._cart.UpdateCartProductQuantity(productid , count).subscribe({
    next:(res)=>{
      this.cart=res.data;
    }
  })
}
ngOnInit(): void {
    this.getCartService()
}
clearCart=()=>{
  this._cart.clearCart().subscribe({
    next:(res)=>{
      console.log(res)
      if(res.message == 'success'){
        this.cart={}
        this.toaster.error('cart is empty now')

      }
    }
  })
}

}
