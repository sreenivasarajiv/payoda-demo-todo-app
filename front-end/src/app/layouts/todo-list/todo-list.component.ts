import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../../app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  @Input() todos!: ITodo[];

  constructor() {}

  ngOnInit(): void {}
}
