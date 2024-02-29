import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../games-api.service';

@Component({
  selector: 'app-open-world',
  templateUrl: './open-world.component.html',
  styleUrls: ['./open-world.component.scss']
})
export class OpenWorldComponent implements OnInit {
  games:any[]=[];
  constructor(private _GamesApiService:GamesApiService) { }

  ngOnInit(): void {
    this._GamesApiService.getGamecatag('open-world').subscribe((response)=>{
      this.games =response.slice(0,20);
      console.log( this.games)
         })
  }

}
