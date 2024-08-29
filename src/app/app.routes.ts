
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginComponent } from './login/login.component';  
import { RecommendationComponent } from './recommendation/recommendation.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const routeConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'login', component: LoginComponent } ,
  { path: 'recommendation', component: RecommendationComponent },
  { path: 'game-details', component: GameDetailsComponent}
];

NgModule({
  imports: [RouterModule.forRoot(routeConfig)],  
  exports: [RouterModule]
})
  export default routeConfig;