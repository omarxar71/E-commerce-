import { Component } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
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
