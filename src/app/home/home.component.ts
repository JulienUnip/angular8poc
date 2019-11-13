import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = [
    {id: "1", name: "test"},
    {id: "2", name: "test2"},
    {id: "3", name: "test3"}
  ];

  constructor() { }

  ngOnInit() {
    console.log("Home component init");
  }

  changeInput(name) {
    console.log("My input", name);
  }

  clickTest(name) {
    alert("Username : " + name);
  }

}
