import { Component } from '@angular/core';
import { gamesListObject, Game } from '../gamesListObject';
import { HeaderComponent } from "../header/header.component"; 

@Component({
  selector: 'browse',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {
  games: Game[]; 

  constructor() {
    const gamesList = gamesListObject.getInstance(); 
    this.games = gamesList.games; 
  }
}
