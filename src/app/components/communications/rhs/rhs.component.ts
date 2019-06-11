import { Component, OnInit } from '@angular/core';
import { CommunicationsService, selectMessageAsLower, selectMessageAsUpper } from '../communications.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.css']
})
export class RhsComponent implements OnInit {
  message = '';
  upperMessage$: Observable<string>;
  lowerMessage$: Observable<string>;
  constructor(private service: CommunicationsService) { }

  ngOnInit() {
    this.upperMessage$ = this.service.getSubscription2(selectMessageAsUpper);
    this.lowerMessage$ = this.service.getSubscription2(selectMessageAsLower);
  }

  getIt() {
    this.message = this.service.getMessage();
  }

}
