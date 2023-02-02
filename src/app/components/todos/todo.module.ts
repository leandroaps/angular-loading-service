import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { TodosComponent } from './todos.component';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, MatTableModule],
  providers: [],
  bootstrap: [TodosComponent],
})
export class TodosModule {}
