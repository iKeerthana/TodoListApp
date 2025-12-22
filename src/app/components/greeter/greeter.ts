import { Component,input } from '@angular/core';

@Component({
  selector: 'app-greeter',
  imports: [],
  templateUrl: './greeter.html',
  styleUrl: './greeter.scss',
})
export class Greeter {
  message= input('hello hello!');

}
// 
