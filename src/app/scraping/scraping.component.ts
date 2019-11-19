import { Component, OnInit } from '@angular/core';
import { ScrapingService } from '../services/scraping/scraping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.scss']
})
export class ScrapingComponent implements OnInit {

  constructor(private scrapingService: ScrapingService, private router: Router) { }

  response = "";

  ngOnInit() {
    this.scrapingService.getDatas().subscribe(val => this.response = val);

    console.log('response = ', this.response);
  };

}
