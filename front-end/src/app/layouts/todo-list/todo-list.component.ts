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

    // const todo = this.todos.find((t) => t.id === action.id);
    // if (todo) {
    //   if (action.actionType === 'edit') {
    //     this.todoService.currentEditTodo.next({ ...todo });
    //   }

    //   const index = this.todos.indexOf(todo);
    //   this.todos.splice(index, 1);
    // }
  }
}
