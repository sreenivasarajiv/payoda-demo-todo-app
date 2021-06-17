import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/app.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  @Input() todo!: ITodo;

  constructor() { }

  ngOnInit(): void {
  }

}
