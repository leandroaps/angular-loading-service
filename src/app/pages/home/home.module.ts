import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TodosComponent } from '../../components/todos/todos.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, TodosComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
