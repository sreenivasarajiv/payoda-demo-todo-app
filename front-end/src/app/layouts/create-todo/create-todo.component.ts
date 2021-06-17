import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.sass'],
})
export class CreateTodoComponent implements OnInit {
  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  createTodoForm!: FormGroup;
  @Output() todo = new EventEmitter();

  ngOnInit(): void {
    this.createTodoForm = this.fb.group({
      todo: ['', Validators.required],
      completed: [false],
    });

    this.todoService.currentEditTodo.subscribe(todo => {
      if(todo) {
        this.createTodoForm.setValue({ todo: todo.todo, completed: todo.completed })
      }
    })
  }

  createTodo() {
    const value = { ...this.createTodoForm.value };
    this.createTodoForm.reset({ todo: '', completed: false });
    this.todo.emit(value);
  }
}
