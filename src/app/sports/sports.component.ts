import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../games-api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  games :any[]=[];
  constructor(private _GamesApiService:GamesApiService) { }

  ngOnInit(): void {
    this._GamesApiService.getGamecatag('sports').subscribe((response)=>{
      this.games =response.slice(0,20);
      console.log( this.games)
         })
  }

}
