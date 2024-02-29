import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginErrorMessage : string=''
loginForm= new FormGroup({

  email:new FormControl(null,[Validators.required,Validators.email]),
 
  password:new FormControl(null,[Validators.required,Validators.pattern('^[a-z]{1,7}')]),
  
})

loginMethod(_loginFrom:FormGroup)
   {
  this._AuthService.sendlogin(_loginFrom.value).subscribe((response)=>{
    if( response.message=="success"){
      localStorage.setItem("userToken",response.token)
this._AuthService.decodeUserDate()
this._Router.navigate(['home'])
    
    }
    else{
     this.loginErrorMessage= response.message
    }
  })
   }
  constructor(private _AuthService:AuthService, private _Router:Router) { }


  ngOnInit(): void {
  }

}
