import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from "./search-box/search-box.component";
import { GameDetailsComponent } from "./game-details/game-details.component";
import { gamesListObject } from './gamesListObject';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    HomeComponent,
    HeaderComponent, 
    SearchBoxComponent, 
    GameDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GammingWebsite';
}
