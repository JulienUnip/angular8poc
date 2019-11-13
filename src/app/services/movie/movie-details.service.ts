import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {

    constructor(private http: HttpClient, private route: ActivatedRoute) {}

    urlString = 'https://api.themoviedb.org/3/movie/';
    movieId;

    getMovie(id) {
      return this.http.get<any>(`${this.urlString}` + id + '?&api_key=973d7a172b3a88b6cddbb968b3b7ec12')
        .toPromise()
        .then(res => res)
        .then(res => { return res });
    };
}