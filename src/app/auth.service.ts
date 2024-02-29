import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

import jwt_decode from 'jwt-decode'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient, private _Router:Router) {
    if(localStorage.getItem("userToken")!=null){
      this.decodeUserDate()

      this._Router.navigate([`${localStorage.getItem("currentpage")}`]);

    }
   }
  sendregister(formvalues:object) :Observable<any>
  {
return this._HttpClient.post("https://movies-api.routemisr.com/signup",formvalues)
  }
  sendlogin(formvalues:object) :Observable<any>
  {
return this._HttpClient.post("https://movies-api.routemisr.com/signin",formvalues)
  }
  decodeUserDate(){
    this.userData.next(jwt_decode( JSON.stringify(  localStorage.getItem("userToken")))) 
    
   }
}


