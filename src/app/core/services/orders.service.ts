import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { baseURL } from '../enviroment/enviroment.local';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly _HttpClient : HttpClient) { }
  CheckoutSession= (cartid:string , shippingAddress:object):Observable <any>=>{
    return this._HttpClient.post(`${baseURL}/api/v1/orders/checkout-session/${cartid}?url=http://localhost:4200` , {shippingAddress} , {
      headers: {
        token:localStorage.getItem('token')!
      }
    })
    }
}
