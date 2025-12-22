import { Directive, effect, ElementRef,inject, input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodo {
 
 el=inject(ElementRef);
 iscompleted=input<Boolean>(false)
  constructor() { 
     effect(()=>{
      if(this.iscompleted()){
        this.el.nativeElement.style.textDecoration='line-through';
        this.el.nativeElement.style.backgroundColor='#d3f9d8';
        this.el.nativeElement.style.color='#6c757d';
      }else{
        this.el.nativeElement.style.textDecoration='none';
        this.el.nativeElement.style.backgroundColor='#fff';
        this.el.nativeElement.style.color='black';
      }
    })
  }

}
