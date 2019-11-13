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

  ngOnInit() {
    let movieId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.movieDetailsService.getMovie(movieId).then(
      //res => console.log("result movie", res),
      // res => console.log("resin comp", res),
      res => this.movieInfos = res

    );
  }

}
