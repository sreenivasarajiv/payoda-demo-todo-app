import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.sass'],
})
export class CreateTodoComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  createTodoForm!: FormGroup;
  @Output() todo = new EventEmitter();

  ngOnInit(): void {
    this.createTodoForm = this.fb.group({
      todo: ['', Validators.required],
      completed: [false],
    });
  }

  createTodo() {
    const value = { ...this.createTodoForm.value };
    this.createTodoForm.reset({ todo: '', completed: false });
    this.todo.emit(value);
  }
}
