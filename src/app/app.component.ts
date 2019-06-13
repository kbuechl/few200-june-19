import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { appStarted } from './actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Front end web 200';
  constructor(private store: Store<State>) {
    store.dispatch(appStarted())
  }
}
