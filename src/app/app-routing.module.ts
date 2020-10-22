import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RandomComponent } from './random/random.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ShowViewComponent } from './show-view/show-view.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'random', component: RandomComponent },
  { path: 'search', component: SearchResultsComponent },
  { path: 'view_show', component: ShowViewComponent },
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}