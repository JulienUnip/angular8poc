import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Movie {
  page;
  results;
  total_pages;
  total_results;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient) {}

    urlString = "https://api.themoviedb.org/3/search/movie?&api_key=973d7a172b3a88b6cddbb968b3b7ec12&query=";

    getMovies(movieName) {
      return this.http.get<any>(`${this.urlString}` + movieName)
        .toPromise()
        .then(res => <Movie[]>res.results)
        .then(res => { return res });
    };
}