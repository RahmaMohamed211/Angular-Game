import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../games-api.service';

@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.scss']
})
export class ShooterComponent implements OnInit {
  games:any[]=[];
  constructor(private _GamesApiService:GamesApiService) { }

  ngOnInit(): void {
    this._GamesApiService.getGamecatag('shooter').subscribe((response)=>{
      this.games =response.slice(0,20);
      console.log( this.games)
         })
  }

}
