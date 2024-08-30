import { Component, AfterViewInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Game, gamesListObject } from '../gamesListObject';
import { GameDetailsComponent } from '../game-details/game-details.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'recommendation',
  standalone: true,
  imports: [GameDetailsComponent, CommonModule],
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements AfterViewInit {
  originalGames: Game[] = gamesListObject.getInstance().games.filter(game => (game.id - 1) % 6 === 0);
  recommendedGames: Game[] = this.originalGames;
  currentIndex: number = 0;
  autoNextTimeout: any;
  selectedGame: Game | null = null;
  isDialogOpen: boolean = false;

  @ViewChild('slide') slide!: ElementRef;
  @ViewChild('prev') prevButton!: ElementRef;
  @ViewChild('next') nextButton!: ElementRef;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngAfterViewInit() {
    const prevButton = this.prevButton.nativeElement;
    const nextButton = this.nextButton.nativeElement;

    this.renderer.listen(nextButton, 'click', () => {
      this.nextGame();
    });

    this.renderer.listen(prevButton, 'click', () => {
      this.prevGame();
    });
  }

  nextGame() {
    this.currentIndex = (this.currentIndex + 1) % this.recommendedGames.length;
    this.updateSlidePosition();
  }

  prevGame() {
    this.currentIndex = (this.currentIndex - 1 + this.recommendedGames.length) % this.recommendedGames.length;
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const slide = this.slide.nativeElement;
    const items = slide.querySelectorAll('.content');

    items.forEach((item: HTMLElement, index: number) => {
      if (index === this.currentIndex) {
        this.renderer.setStyle(item, 'transform', 'translateX(0)');
      } else {
        this.renderer.setStyle(item, 'transform', `translateX(${(index - this.currentIndex) * 300}px)`);
      }
    });
  }

  startAutoNext() {
    this.autoNextTimeout = setTimeout(() => {
      this.nextGame();
    }, 1000);
  }

  stopAutoNext() {
    clearTimeout(this.autoNextTimeout);
  }

  viewProductDetails(id: number): void {
    this.router.navigate(['/game-details', id]);
  }
}
