import { Component, OnInit } from '@angular/core';
import { ScrapingService } from '../services/scraping/scraping.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.scss']
})
export class ScrapingComponent implements OnInit {

  constructor(private scrapingService: ScrapingService, private router: Router) { }

  response = "";
  datas = [];
  titles = [];

  ngOnInit() {
    this.scrapingService.getDatas().subscribe(scrapped => {
        this.response = scrapped;
        let titles = [];
        let htmlScrapped = document.createElement('div');

        htmlScrapped.innerHTML = scrapped;

        $(htmlScrapped).find(".lvtitle a").each(function(index, value) {
            titles.push($(value).text());
        });

        console.log("titles : ", titles);

        this.titles = titles;

        console.log("this.titles", this.titles);

    });
  };

}
