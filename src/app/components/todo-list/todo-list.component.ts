import { Component } from '@angular/core';
import { TodoListItem } from './models';

@Component({
  selector: 'app-todo-list',
  templateUrl: `./todo-list.component.html`,
  styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
  items: TodoListItem[] = [
    { description: 'Mow Grass', completed: false },
    { description: 'Take Trash Out', completed: true }
  ];

  markCompleted(item: TodoListItem) {
    item.completed = true;
  }

  add(what: string) {
    const description = what;
    this.items.unshift({ description, completed: false });
  }

  removeCompleted() {
    this.items = this.items.filter(item => !item.completed);
  }

}
