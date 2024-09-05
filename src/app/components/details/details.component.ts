import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
private readonly _ActivatedRoute = inject(ActivatedRoute)
private readonly _product = inject(ProductsService)
product!: Product | undefined;
  ngOnInit(): void {
    let id:any =''
      this._ActivatedRoute.paramMap.subscribe({
        next:(param)=>{console.log(param.get('id'))
           id =param.get('id')
        }
        
      })
      
      this._product.getProductDetailsAPI(id).subscribe({
        next:(res)=>{
          console.log(res.data)
           this.product=res.data;
        }
      })
  }
}
