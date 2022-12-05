import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TodosComponent } from '../components/todos/todos.component';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [HomeComponent, TodosComponent],
  imports: [CommonModule, HomeRoutingModule, MatSlideToggleModule],
  exports: [MatSlideToggleModule],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
