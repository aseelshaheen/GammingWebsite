import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { RecommendationComponent } from '../recommendation/recommendation.component';
import { BrowseComponent } from '../browse/browse.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterModule,
     HeaderComponent,
     RecommendationComponent,
     BrowseComponent
  ],  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
