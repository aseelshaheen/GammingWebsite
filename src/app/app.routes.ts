
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { BrowseComponent } from './browse/browse.component';

const routeConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'browse', component: BrowseComponent}
];

 NgModule({
    imports: [RouterModule.forRoot(routeConfig)],
    exports: [RouterModule]
  })
  export default routeConfig;