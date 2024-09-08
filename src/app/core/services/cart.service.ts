import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../enviroment/enviroment.local';

@Injectable({
  providedIn: 'root'
})
export class CartService {
headers:any={
  token:localStorage.getItem("token")
}
private readonly _HttpClient= inject(HttpClient);
AddProductToCart = (productId:string ):Observable <any>=>{
return this._HttpClient.post(`${baseURL}/api/v1/cart` , {productId} , {headers:{...this.headers}})
}

UpdateCartProductQuantity = (productId:string , count:number):Observable <any>=>{
  return this._HttpClient.put(`${baseURL}/api/v1/cart/${productId}` , {count} , {headers:{...this.headers}})
  }



  
GetLoggedUserCart= ():Observable <any>=>{
    return this._HttpClient.get(`${baseURL}/api/v1/cart`, {headers:{...this.headers}})
    }


    RemoveSpecificCartItem = (productId:string ):Observable <any>=>{
      return this._HttpClient.delete(`${baseURL}/api/v1/cart/${productId}` ,  {headers:{...this.headers}})
      }


      clearCart= ():Observable <any>=>{
        return this._HttpClient.delete(`${baseURL}/api/v1/cart`, {headers:{...this.headers}})
        }
       
}
