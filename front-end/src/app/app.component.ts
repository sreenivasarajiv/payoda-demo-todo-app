import { Component } from '@angular/core';

export interface ITodo { todo: string; completed: boolean };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  todos: ITodo[] = [];

  createTodo(todo: ITodo) {
    this.todos.push(todo);
  }
}
