import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../games-api.service';

@Component({
  selector: 'app-recing',
  templateUrl: './recing.component.html',
  styleUrls: ['./recing.component.scss']
})
export class RecingComponent implements OnInit {
  games :any[]=[];
  constructor(private _GamesApiService:GamesApiService) { }

  ngOnInit(): void {
    this._GamesApiService.getGamecatag('racing').subscribe((response)=>{
      this.games =response.slice(0,20);
      console.log( this.games)
         })
  }

}
