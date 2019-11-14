import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDataComponent } from './book-data/book-data.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { ChartjsComponent } from './chartjs/chartjs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookDataComponent },
  { path: 'movies', component: MovieComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'charts', component: ChartjsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
