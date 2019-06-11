import { Observable, BehaviorSubject, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TodoListItem } from './models';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable()
export class TodosDataService {


  cached: TodoListItem[] = [];
  data = new BehaviorSubject<TodoListItem[]>([]);

  constructor(private http: HttpClient) {

    this.http.get<{ data: TodoListItem[] }>('http://localhost:3000/todos')
      .pipe(
        map(results => results.data),
        tap(results => this.cached = results)

      ).subscribe(d => this.data.next(this.cached));
  }

  getAll(): Observable<TodoListItem[]> {
    return this.data.asObservable();
  }

  add(description: string) {
    this.http.post<TodoListItem>('http://localhost:3000/todos', { description })
      .subscribe(r => {
        this.cached.push(r);
        this.data.next(this.cached);
      });
  }

}

