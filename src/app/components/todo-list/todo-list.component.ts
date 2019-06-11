import { Component, OnInit } from '@angular/core';
import { TodoListItem } from './models';
import { TodosDataService } from './todo-data-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: `./todo-list.component.html`,
  styleUrls: ['todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todos$: Observable<TodoListItem[]>;

  constructor(private service: TodosDataService) {

  }
  ngOnInit() {
    this.todos$ = this.service.getAll();
  }

  markCompleted(item: TodoListItem) {

  }

  add(what: string) {
    const description = what;
    this.service.add(description);
  }

  removeCompleted() {
    //todo
  }

}
