import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
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

  @Output() filteredGames = new EventEmitter<Game[]>();  // New output event

  constructor() {
    const gameList = gamesListObject.getInstance().games;
    this.allGamesCount = gameList.length;
    this.freeGamesCount = this.getFreeGamesCount(gameList);
    this.paidGamesCount = this.getPaidGamesCount(gameList);
    this.filteredGames.emit(gameList); // Emit the initial game list
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

  getFreeGamesCount(games: Game[]): number {
    return games.filter(game => game.price === 0).length; 
  }

  getPaidGamesCount(games: Game[]): number {
    return games.filter(game => game.price > 0).length; 
  }

  filterGames(filter: string): void {
    const gameList = gamesListObject.getInstance().games;
    let filteredList: Game[] = [];

    if (filter === 'all') {
      filteredList = gameList;
    } else if (filter === 'free') {
      filteredList = gameList.filter(game => game.price === 0);
    } else if (filter === 'paid') {
      filteredList = gameList.filter(game => game.price > 0);
    }

    this.filteredGames.emit(filteredList);  // Emit the filtered game list
  }
}
