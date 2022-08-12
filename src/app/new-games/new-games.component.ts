import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.css']
})
export class NewGamesComponent implements OnInit {
  games: any;
  new_games: Array<any> = [];
  jackpot_games: any;
  showPlayIcon: Array<boolean> = [];
  
  constructor(private service: MasterService) { 
    //this.showPlayIcon = false;
  }

  ngOnInit(): void {
    this.service.getGames().subscribe((response) => {
      this.games = response;
      for(let game of this.games){
        if(game.categories.includes('new')){
          this.new_games.push(game)
          this.showPlayIcon.push(false)
        }
      }
    });

    this.service.getJackpotGames().subscribe((response) => {
      this.jackpot_games = response;
      for(let game of this.new_games){
        for(let jackpot_game of this.jackpot_games){
          if(game.id == jackpot_game.game){
            game.amount = jackpot_game.amount
          }
        }
      }
    });
  }

}
