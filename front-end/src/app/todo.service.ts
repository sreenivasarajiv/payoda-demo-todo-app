import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  currentEditTodo = new BehaviorSubject<ITodo | null>(null);

  constructor(private _api: HttpClient) {}

  apiBase = 'http://localhost:3000/todos';

  getTodos(): Observable<ITodo[]> {
    return this._api.get(this.apiBase) as Observable<ITodo[]>;
  }

  createTodo(todo: ITodo) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this._api.post(this.apiBase, JSON.stringify(todo), {
      headers,
    }) as Observable<ITodo>;
  }

  updateTodo(todo: ITodo) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this._api.put(this.apiBase + '/' + todo._id, JSON.stringify(todo), {
      headers,
    }) as Observable<ITodo>;
  }

  deleteTodo(id: string | number) {
    return this._api.delete(this.apiBase + '/' + id) as Observable<ITodo>;
  }
}
