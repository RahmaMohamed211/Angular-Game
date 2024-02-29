import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../games-api.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.scss']
})
export class PcComponent implements OnInit {
  games :any[]=[];
  constructor(private _GamesApiService:GamesApiService) { }

  ngOnInit(): void {
    this._GamesApiService.getGameplatform('pc').subscribe((response)=>{
      this.games =response.slice(0,20);
      console.log( this.games)
         })
  }

}
