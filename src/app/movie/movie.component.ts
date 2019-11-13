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

  ngOnInit() {
      let movies = [];
      this.movieService.getMovies(this.defaultMovieName)
      .then(res => res.forEach(function(element) {
        movies.push(element);
      }))
      this.moviesList = movies;
      console.log(this.moviesList)
  }

  changeMovie(movieName) {
      let movie = (movieName !== '') ? movieName : this.defaultMovieName;
      let movies = [];
      this.movieService.getMovies(movie)
      .then(res => res.forEach(function(element) {
        movies.push(element);
      }))
      this.moviesList = movies;
  };

  goToMovieDetails(movieId) {
    console.log(movieId);
    this.router.navigate(['/movie', movieId]);
  };

}
