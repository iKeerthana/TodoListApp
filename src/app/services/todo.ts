import { inject, Injectable } from '@angular/core';
import { todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  http=inject(HttpClient)
 
  getTodoItem(){
  const url=`https://jsonplaceholder.typicode.com/todos`
  return this.http.get<todo[]>(url)
   
}
}



export type { todo };

