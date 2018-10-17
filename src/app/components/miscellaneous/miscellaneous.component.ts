import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.scss']
})
export class MiscellaneousComponent implements OnInit {

  longStrings = [
    'This is a long but not so quite string',
    'This is another long but not so quite string',
    'This is a third long but not so quite string'
  ];

  constructor() { }

  ngOnInit() {
  }

}
