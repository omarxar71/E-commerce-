import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../core/services/cart.service';
import { CartData, CartResponse } from '../../core/interfaces/cart.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule , RouterLink , RouterLinkActive ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  cart!:CartResponse;
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  private readonly _cart = inject(CartService);
ngOnInit(): void {
    this._cart.GetLoggedUserCart().subscribe({
      next:(res)=>{console.log(res)
        this.cart=res;
      }
    })
}
}
