import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, filter, map } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as applicationActions from '../actions/app.actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) { }

  logItOut = createEffect(() =>
    this.actions$.pipe(
      tap(a => console.log(a))
    ), { dispatch: false }
  );

  saveSetCountBy = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.setCountBy),
      tap(action =>
        localStorage.setItem('count-by', action.by.toString()))
    ), { dispatch: false }
  );

  readSetCountBy = createEffect(() =>
    this.actions$
      .pipe(
        ofType(applicationActions.appStarted), // IF it is the appStarted Action.
        map(() => localStorage.getItem('count-by')), // read it out of localstorage. It is either "1", "3", "5" or null
        filter(x => x !== null), // if it is null, just stop here. go witht he default in the initial state
        map(countBy => parseInt(countBy, 10)), // turn that string into a number. (the 10 in parseInt says this is a base 10 number)
        map(count => counterActions.setCountBy({ by: count })) // Dispatch an action.
      ));
}
