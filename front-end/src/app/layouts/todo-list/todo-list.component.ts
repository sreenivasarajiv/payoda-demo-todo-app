import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { ITodo } from '../../app.component';
import { IAction } from '../todo/todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  @Input() todos!: ITodo[];
  @Output() action = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  todoAction(action: IAction) {

    this.action.emit(action);
    
  }
}
