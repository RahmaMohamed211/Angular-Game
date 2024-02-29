import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../games-api.service';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {
  games :any[]=[];
  constructor(private _GamesApiService:GamesApiService) { }

  ngOnInit(): void {
    this._GamesApiService.getGamesortby('release-date ').subscribe((response)=>{
      this.games =response.slice(0,20);
      console.log( this.games)
         })
  }

}
