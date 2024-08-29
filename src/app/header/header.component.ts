import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';  
import { Router } from '@angular/router';
import { RecommendationComponent } from '../recommendation/recommendation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, LoginComponent, RecommendationComponent],  
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
  constructor(private router: Router) { }

  navigateToLogin(): void {
    this.router.navigate(['/login']);  // Navigate to the login route
  }
}
