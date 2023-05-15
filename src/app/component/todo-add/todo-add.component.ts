import { Component } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {

  todo:Todo = {title:"", completed: false}

  constructor(private todoService:TodoService){}

  addNewTodo(){
    this.todoService.add({...this.todo});
  }

}
