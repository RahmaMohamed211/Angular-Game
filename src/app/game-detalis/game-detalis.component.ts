import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesApiService } from '../games-api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-game-detalis',
  templateUrl: './game-detalis.component.html',
  styleUrls: ['./game-detalis.component.scss']
})
export class GameDetalisComponent implements OnInit {

gameid:string |null='';
gameDate:any;
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}

  constructor(private _ActivatedRoute:ActivatedRoute,private _GamesApiService:GamesApiService) { }

  ngOnInit(): void {
    this.gameid= this._ActivatedRoute.snapshot.paramMap.get("id")
    this._GamesApiService.getGameDetails(this.gameid).subscribe((response)=>{
      this.gameDate =response;
      console.log( this.gameDate)
         })
  }

}
