import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos?: Todo[];
  constructor() {
    this.todos = [{
      id: 1,
      title: 'Todo One',
      completed:false,
    },
    {
      id: 2,
      title: 'Todo Two',
      completed:true,
    },
    {
      id: 3,
      title: 'Todo Three',
      completed:false,
    }]
  }

  add(todo: Todo){
    this.todos?.push(todo);
    console.log(this.todos);
    
  }

  getData(){
    
  }
 


}
