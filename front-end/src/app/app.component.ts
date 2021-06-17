import { Component } from '@angular/core';

export interface ITodo { id: string | number, todo: string; completed: boolean };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  todos: ITodo[] = [{ id: 1, todo: "asdasdasda sadasdasdas", completed: true }];

  createTodo(todo: ITodo) {
    this.todos.push(todo);
  }
}
