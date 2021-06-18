import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/app.component';

export interface IAction {
  actionType: 'edit' | 'delete';
  id: number | string;
  todo?: ITodo;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: ITodo;
  @Output() action = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  markAsCompleted() {
    this.todo.completed = !this.todo.completed;
  }

  editTodo() {
    const action: IAction = { actionType: 'edit', id: this.todo._id, todo: this.todo };
    this.action.emit(action);
  }

  deleteTodo() {
    const action: IAction = { actionType: 'delete', id: this.todo._id };
    this.action.emit(action);
  }
}
