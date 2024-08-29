import {
  Component,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
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

  gameList = gamesListObject.getInstance().games;
  filteredList: Game[] = [];
  currentFilter: string = 'all'; 

  selectedGenre: string = 'all';
  genres: string[] = [
    'RPG', 'Action-Adventure', 'Sandbox', 'FPS (First-Person Shooter)', 
    'Battle Royale', 'Sports', 'MOBA (Multiplayer Online Battle Arena)', 
    'Action RPG', 'Party', 'Adventure', 'Simulation', 'Horror', 
    'Roguelike', 'Survival', 'Action'
  ];

  @Output()
  searchTextChanged: EventEmitter<String> = new EventEmitter<String>();


  @ViewChild('searchWrapper') searchWrapper!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;

  @Output() filteredGames = new EventEmitter<Game[]>();

  constructor() {
    this.allGamesCount = this.gameList.length;
    this.freeGamesCount = this.getFreeGamesCount(this.gameList);
    this.paidGamesCount = this.getPaidGamesCount(this.gameList);
    this.filteredList = this.gameList; 
    this.filteredGames.emit(this.filteredList);
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
    this.searchText = ''; 
    this.filteredList = this.applyFilter(); 
    this.filteredGames.emit(this.filteredList);
    event.preventDefault();
  }

  getFreeGamesCount(games: Game[]): number {
    return games.filter((game) => game.price === 0).length;
  }

  getPaidGamesCount(games: Game[]): number {
    return games.filter((game) => game.price > 0).length;
  }

  filterGames(filter?: string): void {
    this.currentFilter = filter || this.currentFilter; 
    this.filteredList = this.applyFilter(); 
    this.filteredGames.emit(this.filteredList);
}
  

  applyFilter(): Game[] {
    let filtered = [...this.gameList];

    // filter by price 
    if (this.currentFilter === 'free') {
        filtered = filtered.filter((game) => game.price === 0);
    } else if (this.currentFilter === 'paid') {
        filtered = filtered.filter((game) => game.price > 0);
    }

    // Filter by genre
    if (this.selectedGenre !== 'all') {
        filtered = filtered.filter((game) => game.genre.includes(this.selectedGenre));
    }

    // Filter by search text
    if (this.searchText) {
        filtered = filtered.filter((game) =>
            game.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
    }

    return filtered;
}



  searchGames(text?: string) {

    if (text !== undefined) {
      this.searchText = text;
    }

    this.filteredList = this.applyFilter();
    this.filteredGames.emit(this.filteredList);
  }
}
