import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseURL } from '../enviroment/enviroment.local';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _Router=inject(Router);

  constructor(private _HttpClient:HttpClient) { }
signUpService=(user:any):Observable<any>=>{
  return this._HttpClient.post(`${baseURL}/api/v1/auth/signin` ,user)
}

signInService=(user:any):Observable<any>=>{
  return this._HttpClient.post(`${baseURL}/api/v1/auth/signin` ,user)
}
userData = ()=>{
  let token=localStorage.getItem("token");
  
  if(token){
    try{
      let decoded = jwtDecode(token);
      console.log(decoded)
    }catch(error){
    this._Router.navigate(["/signin"])
      localStorage.removeItem('token'); 
    }
  }
}
}
