import { Component,signal,input, output } from '@angular/core';
import { todo } from '../../model/todo.type';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [UpperCasePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  todo=input.required<todo>()

  todoToggled=output<todo>()

todoclicked(){
  this.todoToggled.emit(this.todo())
}

}
