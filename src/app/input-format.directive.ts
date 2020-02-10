import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[InputFormat]'
})
export class InputFormatDirective {

  constructor(private ref: ElementRef) { }

 

}
