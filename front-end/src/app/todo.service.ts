import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITodo } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  currentEditTodo = new BehaviorSubject<ITodo | null>(null);

  constructor() {}

  private todos: ITodo[] = [{ id: 1, todo: 'Hello World', completed: false }]

  getTodos(): ITodo[] {
    return this.todos;
  }

  createTodo(todo: ITodo) {
    this.todos.push({ ...todo, id: Math.random()});
  }

  updateTodo(todo: ITodo) {
    console.log('update todo', todo.id, todo.todo);
    this.todos.push(todo);
  }

  deleteTodo(id: string | number) {
    console.log('delete todo', id);
  }
}
