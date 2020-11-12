import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'http://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  constructor(private http:HttpClient) { }

  getDetailTodoUrl (todo:Todo):string {
    return `${this.todosUrl}/${todo.id}`;
  }

  getTodos ():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  toggleCompleted (todo:Todo):Observable<any> {
    const url = this.getDetailTodoUrl(todo);
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo (todo:Todo):Observable<Todo> {
    const url = this.getDetailTodoUrl(todo);
    return this.http.delete<Todo>(url, httpOptions);
  }
}
