import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrapingService {

    constructor(private http: HttpClient, private route: ActivatedRoute) {}

    urlToScrap = 'https://www.ebay.fr/sch/mojujul-ewt3xn/m.html?_nkw=&_armrs=1&_ipg=&_from=';
    //headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

    getDatas() {
      return this.http.get(this.urlToScrap, {responseType: "text"})
    };
}
