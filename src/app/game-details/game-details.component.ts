import { Component, Input } from '@angular/core';
import { Game } from '../gamesListObject';

@Component({
  selector: 'game-details',
  standalone: true,
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {
  @Input() game: Game | null = null; 
  @Input() isDialogOpen: boolean = false; 
games: any;

  closeDialog(): void {
    this.isDialogOpen = false; 
  }

}
