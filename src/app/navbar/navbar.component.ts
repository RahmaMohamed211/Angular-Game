import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
login:boolean=true;
  constructor(private _AuthService:AuthService, private _Router:Router) {
    if(localStorage.getItem("userToken")){
    
    }
    
   }

  ngOnInit(): void {
    this._AuthService.userData.subscribe( ()=>{
      if(this._AuthService.userData.getValue() == null){
        this.login=false;
      }
      else{
        this.login=true;
      }
  })
  }
  logout(){
    
localStorage.removeItem("userToken")
this._AuthService.userData.next(null);
this._Router.navigate(['login'])

}
}
