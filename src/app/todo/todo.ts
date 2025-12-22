import { Component, inject, OnInit, signal } from '@angular/core';
import{TodoService} from '../services/todo'
import { todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';
import { TodoItem } from '../components/todo-item/todo-item';
import { HighlightCompletedTodo } from '../directives/highlight-completed-todo';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todo',
  imports: [CommonModule,TodoItem,HighlightCompletedTodo,FormsModule,FilterTodosPipe],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo implements OnInit{

  todoService=inject(TodoService)
  // constructor(todoService:TodoService){
  // }
  // todos:Array<todo>=[]
  todos=signal<Array<todo>>([])
  searchTerm=signal('')

  ngOnInit(): void {
    

    
    this.todoService.getTodoItem().pipe(catchError((err)=>{console.log(err)
      throw err
  })).subscribe((data)=>this.todos.set(data))
  }
updatetodoitem(todoitem:todo){

  this.todos.update((data)=>{ 
     return data.map(todo=>
      {
        
      if(todo.id===todoitem.id){
       return {...todo,
          completed :!todo.completed}
      }
      return todo
     })

  })

}

}
