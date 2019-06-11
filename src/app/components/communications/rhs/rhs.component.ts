import { Component, OnInit } from '@angular/core';
import { CommunicationsService } from '../communications.service';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.css']
})
export class RhsComponent implements OnInit {
  message = '';
  constructor(private service: CommunicationsService) { }

  ngOnInit() {
  }

  getIt() {
    this.message = this.service.getMessage();
  }

}
