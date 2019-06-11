import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lhs',
  templateUrl: './lhs.component.html',
  styleUrls: ['./lhs.component.css']
})
export class LhsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  setIt(what: HTMLInputElement) {
    //do something

    what.value = '';
    what.focus();
  }
}
