import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'search-box',
  standalone: true,
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('searchWrapper') searchWrapper!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;

  searchToggle(event: Event): void {
    const container = this.searchWrapper.nativeElement;
    const isActive = container.classList.contains('active');

    if (isActive) {
      container.classList.remove('active');
      this.searchInput.nativeElement.value = ''; // Clear input when closing
    } else {
      container.classList.add('active');
    }

    event.preventDefault();
  }
}
