import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game, gamesListObject } from '../gamesListObject';  

@Component({
  selector: 'search-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  searchText: string = '';
  allGamesCount: number = 0;
  freeGamesCount: number = 0;
  paidGamesCount: number = 0;
  @ViewChild('searchWrapper') searchWrapper!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor() {
    const gameList = gamesListObject.getInstance().games;
    this.allGamesCount = this.showAllGames(gameList);
    this.freeGamesCount = this.showFreeGames(gameList);
    this.paidGamesCount = this.showPaidGames(gameList);
  }

  searchToggle(event: Event): void {
    const container = this.searchWrapper.nativeElement;
    const isActive = container.classList.contains('active');

    if (!isActive) {
      container.classList.add('active');
      this.searchInput.nativeElement.focus(); 
    }

    event.preventDefault();
  }

  closeSearch(event: Event): void {
    const container = this.searchWrapper.nativeElement;
    container.classList.remove('active');
    this.searchInput.nativeElement.value = '';
    this.searchText = ''; // Reset the search text
    event.preventDefault();
  }

  showAllGames(games: Game[]): number {
    return games.length; 
  }

  showFreeGames(games: Game[]): number {
    return games.filter((game) => game.price === 0).length; 
  }

  showPaidGames(games: Game[]): number {
    return games.filter((game) => game.price > 0).length; 
  }

  filterGames(filter: string): void {
    const gameList = gamesListObject.getInstance().games;
    if (filter === 'all') {
      this.allGamesCount = this.showAllGames(gameList);
    } else if (filter === 'free') {
      this.freeGamesCount = this.showFreeGames(gameList);
    } else if (filter === 'paid') {
      this.paidGamesCount = this.showPaidGames(gameList);
    }
  }
}
