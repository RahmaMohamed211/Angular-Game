import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GamesApiService } from '../games-api.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  gamesNumber: number = 20;
  gamesArray = [];
  showedGames = [];
  games :any[]=[];
  constructor(private _GamesApiService:GamesApiService,    private _ActivatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    localStorage.setItem("currentpage","all");
        this._GamesApiService.getallgames().subscribe((response)=>{
 this.games =response.slice(0,20);
 console.log( this.games)
    })
    
  }
  seeMore() {
    this.gamesNumber += 20;
    this.showedGames  =  this.gamesArray.slice(0, this.gamesNumber);
  }
}
