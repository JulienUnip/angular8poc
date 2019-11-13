import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from '../../services/movie/movie-details.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieDetailsService: MovieDetailService, private route: ActivatedRoute) { }

  movieInfos;
  showSpinner: boolean = true;

  ngOnInit() {
    let movieId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.movieDetailsService.getMovie(movieId).then(
      res => this.movieInfos = res
    ).then(() => this.showSpinner = false)
  };

}
