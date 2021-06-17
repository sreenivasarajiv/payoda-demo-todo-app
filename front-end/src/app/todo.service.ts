import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITodo } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  currentEditTodo = new BehaviorSubject<ITodo | null>(null);

  constructor() { }
}
