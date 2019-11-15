import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("Init child component");
  }

  fireEmit() {
    this.childEvent.emit('Test emitted from child');
  }

}
