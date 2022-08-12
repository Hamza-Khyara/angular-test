import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  games: any;
  live_games: Array<any> = [];
  jackpot_games: any;
  showPlayIcon: Array<boolean> = [];

  constructor(private service: MasterService) { }

  ngOnInit(): void {
    this.service.getGames().subscribe((response) => {
      this.games = response;
      for(let game of this.games){
        if(game.categories.includes('live')){
          if(game.categories.includes('top'))
            game.top = true
          else if(game.categories.includes('new'))
            game.new = true
          this.live_games.push(game)
          this.showPlayIcon.push(false)
        }
      }
    });

    this.service.getJackpotGames().subscribe((response) => {
      this.jackpot_games = response;
      for(let game of this.live_games){
        
        for(let jackpot_game of this.jackpot_games){
          if(game.id == jackpot_game.game){
            game.amount = jackpot_game.amount
          }
        }
      }
    });
  }

}
