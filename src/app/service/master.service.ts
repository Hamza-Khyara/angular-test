import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  // private url = 'http://jsonplaceholder.typicode.com/posts';
  private url = 'https://stage.whgstage.com/front-end-test/games.php';
  private url2 = 'https://stage.whgstage.com/front-end-test/jackpots.php';
  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url);
  }
//  https://github.com/gopinav/Angular-Tutorials/blob/master/routing-demo/src/app/app-routing.module.ts
  getGames(){
    return this.httpClient.get(this.url);
  }

  getJackpotGames(){
    return this.httpClient.get(this.url2);
  }
}
