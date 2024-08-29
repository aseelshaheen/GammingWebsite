import { Component } from '@angular/core';
import { gamesListObject, Game } from '../gamesListObject';
import { SearchBoxComponent } from "../search-box/search-box.component";
import { GameDetailsComponent } from "../game-details/game-details.component";

@Component({
  selector: 'browse',
  standalone: true,
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  imports: [SearchBoxComponent, GameDetailsComponent]
})
export class BrowseComponent {
  games: Game[] = [];
  selectedGame: Game | null = null; 
  isDialogOpen: boolean = false;    

  constructor() {
    const gamesList = gamesListObject.getInstance();
    this.games = gamesList.games;
  }

  updateGamesList(filteredGames: Game[]): void {
    this.games = filteredGames;
  }

  showGameDetails(game: Game): void {
    this.selectedGame = game;   
    this.isDialogOpen = true;   

    console.log(this.selectedGame);
    console.log(this.isDialogOpen);

  }
}
