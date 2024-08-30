import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {
    const gamesList = gamesListObject.getInstance();
    this.games = gamesList.games;
    console.log(this.isDialogOpen)
  }

  updateGamesList(filteredGames: Game[]): void {
    this.games = filteredGames;
  }


  openGameDetails(game: Game): void {
    this.selectedGame = game;
    this.isDialogOpen = true;

    console.log(this.selectedGame+" "+this.isDialogOpen)
  }

  closeDialog(): void {
    this.isDialogOpen = false;
  }

  viewProductDetails(id: number): void {
    this.router.navigate(['/game-details', id]);
  }
}
