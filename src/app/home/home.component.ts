import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../games-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

games :any[]=[];
constructor(private  _GamesApiService:GamesApiService) { }

  ngOnInit(): void {
    localStorage.setItem("currentpage","home");
    localStorage.setItem("currentpage","all");
    this._GamesApiService.getallgames().subscribe((response)=>{
this.games =response.slice(15,18);
console.log( this.games)
})
}

}


