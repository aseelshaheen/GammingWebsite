import { Component, AfterViewInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { gamesListObject, Game } from '../gamesListObject';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'recommendation',
  standalone: true,
  imports: [HomeComponent, RouterModule, CommonModule],
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements AfterViewInit {
  originalGames: Game[] = gamesListObject.getInstance().games.filter(game => (game.id - 1) % 6 === 0);
  recommendedGames: Game[] = this.originalGames; // Use only the set of original games
  currentIndex: number = 0; // Track the current game index
  autoNextTimeout: any; // To hold the timeout reference for auto-transition

  @ViewChild('slide') slide!: ElementRef;
  @ViewChild('prev') prevButton!: ElementRef;
  @ViewChild('next') nextButton!: ElementRef;

  constructor(private renderer: Renderer2) {}

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
    this.currentIndex = (this.currentIndex + 1) % this.recommendedGames.length; // Cycle to next index
    this.updateSlidePosition();
  }

  prevGame() {
    this.currentIndex = (this.currentIndex - 1 + this.recommendedGames.length) % this.recommendedGames.length; // Cycle to previous index
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const slide = this.slide.nativeElement;
    const items = slide.querySelectorAll('.content');

  
    items.forEach((item: HTMLElement, index: number) => {
      if (index === this.currentIndex) {
        this.renderer.setStyle(item, 'transform', 'translateX(0)'); // Center the current item
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
    clearTimeout(this.autoNextTimeout); // Clear the timeout if the mouse leaves
  }
}
