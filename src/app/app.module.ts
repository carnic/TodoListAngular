import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AboutComponent } from './about/about.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { AddTodoItemComponent } from './todo-list/add-todo-item/add-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AboutComponent,
    TodoItemComponent,
    AddTodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
