import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItem } from '../models';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  @Input() todoItems: TodoListItem[];
  @Output() clearCompletedItems = new EventEmitter();
  @Output() markItemComplete = new EventEmitter<TodoListItem>();
  constructor() { }

  ngOnInit() {
  }
  markCompleted(item) {
    this.markItemComplete.emit(item);
  }
  removeCompleted() {
    this.clearCompletedItems.emit();
  }
}
