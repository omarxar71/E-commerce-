import { Component, inject } from '@angular/core';
import { OrdersService } from '../../core/services/orders.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addresse',
  standalone: true,
  imports: [ReactiveFormsModule],

templateUrl: './addresse.component.html',
  styleUrl: './addresse.component.scss'
})
export class AddresseComponent {
  cartid:any='';
  private readonly _OrdersService=inject(OrdersService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly ActivatedRoute= inject(ActivatedRoute)

address:FormGroup = this._FormBuilder.group({
  details:[null],
  phone:[null],
  city:[null],
})








  payment=()=>{
  this._OrdersService.CheckoutSession(this.cartid , this.address.value ).subscribe({
    next:(res)=>{
      console.log(res)
      window.location.href = res.session.url
    }
  })
}
ngOnInit():void{
this.ActivatedRoute.paramMap.subscribe(
  {
    next:(param)=>{
      this.cartid=param.get('id')
    }
  }
)
}

}
