import { Component, OnInit } from '@angular/core';
import { IAction } from './layouts/todo/todo.component';
import { TodoService } from './todo.service';

export interface ITodo {
  _id: string | number;
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
    if (todo._id) {
      this.todoService
        .updateTodo(todo)
        .subscribe((todo) => this.todos.push(todo));
    } else {
      this.todoService
        .createTodo(todo)
        .subscribe((todo) => this.todos.push(todo));
    }
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  todoAction(action: IAction) {
    const todo = this.todos.find((t) => t._id === action.id);

    if (action.actionType === 'delete') {
      this.todoService.deleteTodo(action.id).subscribe((data) => {
        const index = this.todos.indexOf(todo as ITodo);
        this.todos.splice(index, 1);
      });
    }

    if (action.actionType === 'edit') {
      this.todoService.currentEditTodo.next(todo as ITodo);
      const index = this.todos.indexOf(todo as ITodo);
      this.todos.splice(index, 1);
    }

    if (action.actionType === 'completed') {
      this.todoService.updateTodo(todo as ITodo).subscribe();
    }
  }
}
