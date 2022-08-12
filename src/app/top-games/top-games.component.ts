import { AfterContentInit, Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.css']
})
export class TopGamesComponent implements OnInit {
  games: any;
  top_games: Array<any> = [];
  jackpot_games: any;
  showPlayIcon: Array<boolean> = [];

  constructor(private service: MasterService) { }

  ngOnInit(): void {
    this.service.getGames().subscribe((response) => {
      this.games = response;
      for(let game of this.games){
        if(game.categories.includes('top')){
          this.top_games.push(game)
          this.showPlayIcon.push(false)
        }
      }
    });
    this.service.getJackpotGames().subscribe((response) => {
      this.jackpot_games = response;
      for(let game of this.top_games){
        for(let jackpot_game of this.jackpot_games){
          if(game.id == jackpot_game.game){
            game.amount = jackpot_game.amount
          }
        }
      }
    });
  }

}
