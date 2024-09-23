import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../core/services/cart.service';
import { CartData, CartResponse } from '../../core/interfaces/cart.interface';
import { TranslateModule} from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule , RouterLink , RouterLinkActive , TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  counter:any=0;
  private readonly _cart = inject(CartService);
  private readonly CartService = inject(CartService);


  cart!:CartResponse;
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

ngOnInit(): void {
  
    this._cart.GetLoggedUserCart().subscribe({
      next:(res)=>{console.log(res)
        this.cart=res;
      }
    })
    this.CartService.cartCounter.subscribe({
      next:(counter)=>{
        this.counter=counter;
      }
    })

}

 
}
