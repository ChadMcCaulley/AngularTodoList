import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit():void {
  }

  setClasses():object {
    return {
      todo: true,
      'is-complete': this.todo.completed
    }
  }

  onToggle ():void {
    this.todo.completed = !this.todo.completed;
    this.todoService.toggleCompleted(this.todo);
  }

  onDelete ():void {
    this.deleteTodo.emit(this.todo);
  }

}
