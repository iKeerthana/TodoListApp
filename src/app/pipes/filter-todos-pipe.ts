import { Pipe, PipeTransform } from '@angular/core';
import { todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(value:todo[], searchTerm: string): todo[] {
    if(!searchTerm){
      return value
    }
    const text=searchTerm.toLowerCase()
    return value.filter(todo=>{
      return todo.title.toLowerCase().includes(text)
    })
  }

}
