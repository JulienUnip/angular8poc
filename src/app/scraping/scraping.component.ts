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

  ngOnInit() {
    this.scrapingService.getDatas().subscribe(scrapped => {
        $(document).ready(function() {
          let htmlScrapped = document.createElement('div');
          htmlScrapped.innerHTML = scrapped;
          console.log($(htmlScrapped).find(".prc").text());
        });
    });
  };

}
