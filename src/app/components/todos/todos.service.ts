import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
