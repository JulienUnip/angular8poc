import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDataComponent } from './book-data/book-data.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { FormComponent } from './form/form.component';
import { ParentComponent } from './parent/parent.component';
import { ScrapingComponent } from './scraping/scraping.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'isRight' } },
  { path: 'books', component: BookDataComponent, data: { animation: 'isLeft' } },
  { path: 'movies', component: MovieComponent, data: { animation: 'isRight' } },
  { path: 'movie/:id', component: MovieDetailsComponent, data: { animation: 'isLeft' } },
  { path: 'charts', component: ChartjsComponent, data: { animation: 'isRight' } },
  { path: 'form', component: FormComponent, data: { animation: 'isLeft' } },
  { path: 'parent', component: ParentComponent, data: { animation: 'isRight' } },
  { path: 'scraping', component: ScrapingComponent, data: { animation: 'isLeft' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
