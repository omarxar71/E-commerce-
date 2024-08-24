import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../enviroment/enviroment.local';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient:HttpClient) { }
  getCategoriesAPI=():Observable<any> =>{
    return this._HttpClient.get(`${baseURL}/api/v1/categories`)
  }
}
