import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router) { }

  defaultMovieName = "Avenger";
  moviesList;
  showSpinner: boolean = true;

  ngOnInit() {
      let movies = [];
      this.movieService.getMovies(this.defaultMovieName)
      .then(res => res.forEach(function(element) {
        movies.push(element);
      }))
      .then(() => this.showSpinner = false)
      this.moviesList = movies;
  }

  changeMovie(movieName) {
      let movie = (movieName !== '') ? movieName : this.defaultMovieName;
      let movies = [];
      this.movieService.getMovies(movie)
      .then(res => res.forEach(function(element) {
        movies.push(element);
      }))
      .then(() => this.showSpinner = false)
      this.moviesList = movies;
  };

  goToMovieDetails(movieId) {
    this.router.navigate(['/movie', movieId]);
  };

}
