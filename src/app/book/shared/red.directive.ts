import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[bmRed]'
})
export class RedDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click')
  toggleRed() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

}
