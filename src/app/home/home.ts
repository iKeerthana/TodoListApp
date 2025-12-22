import { Component,signal } from '@angular/core';
import { Greeter } from '../components/greeter/greeter';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeter,Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  HomeMessage= signal('hello hi world');
  keyupHandler(event:KeyboardEvent){
    console.log(`user typed ${event.key}`)
  }

}
