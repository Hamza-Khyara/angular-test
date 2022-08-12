import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGamesComponent } from './new-games/new-games.component';
import { TopGamesComponent } from './top-games/top-games.component';
import { SlotsComponent } from './slots/slots.component';
import { JackpotsComponent } from './jackpots/jackpots.component';
import { LiveComponent } from './live/live.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { RouletteComponent } from './roulette/roulette.component';
import { TableComponent } from './table/table.component';
import { PokerComponent } from './poker/poker.component';
import { OtherComponent } from './other/other.component';


const routes: Routes = [
  { path: '', component: TopGamesComponent },
  { path: 'top-games', component: TopGamesComponent },
  { path: 'new-games', component: NewGamesComponent },
  { path: 'slots', component: SlotsComponent },
  { path: 'jackpots', component: JackpotsComponent },
  { path: 'live', component: LiveComponent },
  { path: 'blackjack', component: BlackjackComponent },
  { path: 'roulette', component: RouletteComponent },
  { path: 'table', component: TableComponent },
  { path: 'poker', component: PokerComponent },
  { path: 'other', component: OtherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }