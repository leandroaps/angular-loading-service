import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todos';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private todoService: TodosService) {}

  todos$: Observable<Todo[]> | undefined;

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }
}
