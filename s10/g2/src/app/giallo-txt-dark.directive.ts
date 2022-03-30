import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGialloTxtDark]'
})
export class GialloTxtDarkDirective {

  constructor(private el: ElementRef, private render :Renderer2) {
    this.el.nativeElement.style.backgroundColor = 'yellow',
    this.el.nativeElement.style.color = 'black'
   }

}
