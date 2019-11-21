import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrapingService {

    constructor(private http: HttpClient) {}

    urlToScrap = 'http://localhost:8081/scrape';

    getDatas() {
      const headers = new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
      });
      return this.http.get(this.urlToScrap, {responseType: "text", headers})
    };
}
