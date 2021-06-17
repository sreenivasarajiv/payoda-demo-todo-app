import { Component, OnInit } from '@angular/core';
import { IAction } from './layouts/todo/todo.component';
import { TodoService } from './todo.service';

export interface ITodo {
  id: string | number;
  todo: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  todos: ITodo[] = [];

  createTodo(todo: ITodo) {
    if (todo.id) {
      this.todoService.updateTodo(todo);
    } else {
      this.todoService.createTodo(todo);
    }
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  todoAction(action: IAction) {
    const todo = this.todos.find((t) => t.id === action.id);

    if (action.actionType === 'delete') {
      this.todoService.deleteTodo(action.id);
      const index = this.todos.indexOf(todo as ITodo);
      this.todos.splice(index, 1);
    }

    if (action.actionType === 'edit') {
      this.todoService.updateTodo(todo as ITodo);
      this.todoService.currentEditTodo.next(todo as ITodo);
      const index = this.todos.indexOf(todo as ITodo);
      this.todos.splice(index, 1);
    }
  }
}
