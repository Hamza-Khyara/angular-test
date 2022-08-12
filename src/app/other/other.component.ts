import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  games: any;
  other_games: Array<any> = [];
  jackpot_games: any;
  showPlayIcon: Array<boolean> = [];

  constructor(private service: MasterService) { }

  ngOnInit(): void {
    this.service.getGames().subscribe((response) => {
      this.games = response;
      for(let game of this.games){
        // 7. Group “ball”, “virtual” and “fun” in an “Other” category.
        if(game.categories.includes('ball') || game.categories.includes('virtual') || game.categories.includes('fun')){
          if(game.categories.includes('top'))
            game.top = true
          else if(game.categories.includes('new'))
            game.new = true
          this.other_games.push(game)
          this.showPlayIcon.push(false)
        }
      }
    });

    this.service.getJackpotGames().subscribe((response) => {
      this.jackpot_games = response;
      for(let game of this.other_games){
        
        for(let jackpot_game of this.jackpot_games){
          if(game.id == jackpot_game.game){
            game.amount = jackpot_game.amount
          }
        }
      }
    });
  }

}
