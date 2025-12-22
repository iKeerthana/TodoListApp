import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './home/home';
import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header],
  template:  `<app-header/>

  <main>
    <router-outlet/>
  </main>
  `,
  
  styles: [
`main{
padding-inline:16px;
padding-block:8px;  

}`
   
  ],
})
export class App {
  protected readonly title = signal('myNgFirstApp');
}
