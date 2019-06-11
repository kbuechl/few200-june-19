import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  current$: Observable<number>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.current$ = this.store.select(state => state.counter.current);
  }

  increment() {
    this.store.dispatch({ type: 'INCREMENT' });
  }
  decrement() {
    this.store.dispatch({ type: 'DECREMENT' });
  }
  reset() {
    this.store.dispatch({ type: 'RESET' })
  }
}
