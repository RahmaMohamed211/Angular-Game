import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerErrorMessage : string=''
regesiterForm= new FormGroup({
  first_name : new FormControl(null , [Validators.required,Validators.minLength(3), Validators.maxLength(10)]),
  last_name : new FormControl(null , [Validators.required,Validators.minLength(3), Validators.maxLength(10)]),
  email : new FormControl(null,[Validators.required,Validators.email]),
  password : new FormControl(null , [Validators.required,Validators.pattern('^[a-z]{1,7}')]),
  age : new FormControl(null, [Validators.required,Validators.min(20),Validators.max(50)])
  
})

registerMethod(_registerFrom:FormGroup)
   {
  this._AuthService.sendregister(_registerFrom.value).subscribe((response)=>{
    if( response.message=="success"){
     this._Router.navigate(['login'])
     console.log(response)
    }
    else{
     
     this.registerErrorMessage= response.errors.email.message
    }
  })
   }
  constructor(private _AuthService:AuthService, private _Router:Router) { }

 
  ngOnInit(): void {
  }

}
