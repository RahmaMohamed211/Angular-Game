import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../games-api.service';

@Component({
  selector: 'app-zombie',
  templateUrl: './zombie.component.html',
  styleUrls: ['./zombie.component.scss']
})
export class ZombieComponent implements OnInit {
games:any[]=[];
  constructor(private _GamesApiService:GamesApiService) { }

  ngOnInit(): void {
    this._GamesApiService.getGamecatag('zombie').subscribe((response)=>{
      this.games =response.slice(0,20);
      console.log( this.games)
         })
    
  }

}
