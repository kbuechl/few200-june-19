import { Component } from '@angular/core';
import { TodoListItem } from './models';

@Component({
  selector: 'app-todo-list',
  templateUrl: `./todo-list.component.html`,
  styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
  items: TodoListItem[] =  [
    { description: 'Mow Grass', completed: false},
    { description:'Take Trash Out', completed: true}
  ];

  markComplete(item:TodoListItem){
    item.completed = true
  }

  add(what: HTMLInputElement){
    const description = what.value;
    this.items.unshift({description, completed:false });
  
    what.value='';
    what.focus();
  }

  removeCompleted(){
    this.items = this.items.filter(item=> !item.completed)
  }

}
