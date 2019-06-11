import { Component, OnInit } from '@angular/core';
import { CommunicationsService } from '../communications.service';

@Component({
  selector: 'app-lhs',
  templateUrl: './lhs.component.html',
  styleUrls: ['./lhs.component.css']
})
export class LhsComponent implements OnInit {

  constructor(private service: CommunicationsService) { }

  ngOnInit() {
  }
  setIt(what: HTMLInputElement) {
    this.service.setMessage(what.value);

    what.value = '';
    what.focus();
  }
}
