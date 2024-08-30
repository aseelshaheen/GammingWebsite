import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game, gamesListObject } from '../gamesListObject';

@Component({
  selector: 'game-details',
  standalone: true,
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  @Input() game: Game | null = null;
  @Output() close = new EventEmitter<void>();
  games: Game[] = gamesListObject.getInstance().games;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const gameId = +params['id'];
      this.game = this.games.find(game => game.id === gameId) || null;
    });
  }
}
