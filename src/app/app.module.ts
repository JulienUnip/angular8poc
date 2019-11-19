import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDataComponent } from './book-data/book-data.component';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import { MovieComponent } from './movie/movie.component';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {PaginatorModule} from 'primeng/paginator';
import { ChartjsComponent } from './chartjs/chartjs.component';
import {ChartModule} from 'primeng/chart';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ScrapingComponent } from './scraping/scraping.component';


@NgModule({
  declarations: [
    AppComponent,
    BookDataComponent,
    HomeComponent,
    MovieComponent,
    MovieDetailsComponent,
    ChartjsComponent,
    FormComponent,
    ParentComponent,
    ChildComponent,
    ScrapingComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule,
    CardModule,
    VirtualScrollerModule,
    ProgressSpinnerModule,
    PaginatorModule,
    ChartModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }