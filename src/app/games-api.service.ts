import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {
  opation: any[]=[];
  headers = {
    'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  };

  constructor( private _HttpClient:HttpClient) { }
  
  getallgames():Observable<any>{
 
    const options = {
       headers: {
        'X-RapidAPI-Key': '833f0db3bamshb777b427661823dp1a4080jsn41607f93625b',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }};
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games' ,options);
  }
  getGameDetails(gid:string|null):Observable<any>{
    const options = {
      headers: {
       'X-RapidAPI-Key': '833f0db3bamshb777b427661823dp1a4080jsn41607f93625b',
       'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
     }};
     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gid}` ,options);


  }
  getGameplatform(cat:string):Observable<any>{
    const options = {
      headers: {
       'X-RapidAPI-Key': '833f0db3bamshb777b427661823dp1a4080jsn41607f93625b',
       'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
     }};
     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${cat}` ,options);


  }
  getGamesortby(cat:string):Observable<any>{
    const options = {
      headers: {
       'X-RapidAPI-Key': '833f0db3bamshb777b427661823dp1a4080jsn41607f93625b',
       'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
     }};
     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${cat}` ,options);


  }
  getGamecatag(cat:string):Observable<any>{
    const options = {
      headers: {
       'X-RapidAPI-Key': '833f0db3bamshb777b427661823dp1a4080jsn41607f93625b',
       'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
     }};
     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}` ,options);


  }
}
