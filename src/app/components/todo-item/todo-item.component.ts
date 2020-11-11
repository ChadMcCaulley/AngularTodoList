import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses(): object {
    return {
      todo: true,
      'is-complete': this.todo.completed
    }
  }

  onToggle ():void {
    this.todo.completed = !this.todo.completed
  }

  onDelete ():void {
    console.log('DELETED')
  }

}
