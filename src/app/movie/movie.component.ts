import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  moviesList;

  ngOnInit() {
      const defaultMovieName = "Avenger";
      let movies = [];
      this.movieService.getMovies(defaultMovieName)
      .then(res => res.forEach(function(element) {
        movies.push(element);
      }))
      this.moviesList = movies;
  }

  changeMovie(movieName) {
      let movie = (movieName !== '') ? movieName : "Avenger";
      let movies = [];
      this.movieService.getMovies(movie)
      .then(res => res.forEach(function(element) {
        movies.push(element);
      }))
      this.moviesList = movies;
  };

}
