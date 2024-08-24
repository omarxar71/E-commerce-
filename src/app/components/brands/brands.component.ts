import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Brand } from '../../core/interfaces/product';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit{
  allBrands:Brand[]=[];
  constructor(private _BrandsService:BrandsService){}
  displayBrands=()=>{
    this._BrandsService.getBrandAPI().subscribe({
      next:(res)=>{
        console.log(res);
        this.allBrands=res.data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  ngOnInit(): void {
      this.displayBrands();
  }

}
