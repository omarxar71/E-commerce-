import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../enviroment/enviroment.local';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient:HttpClient) { }
  getBrandAPI=():Observable <any>=>{
    return this._HttpClient.get(`${baseURL}/api/v1/brands`)
  }
}
