import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrapingService {

    constructor(private http: HttpClient) {}

    urlToScrap = 'https://www.ebay.fr/sch/mojujul-ewt3xn/m.html?_nkw=&_armrs=1&_ipg=&_from=';

    getDatas() {
      return this.http.get(this.urlToScrap, {responseType: "text"})
    };
}
