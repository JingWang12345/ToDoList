import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAddComponent } from './component/todo-add/todo-add.component';
import { TodosComponent } from './component/todos/todos.component';
import { TodoDetailComponent } from './component/todo-detail/todo-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoAddComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
