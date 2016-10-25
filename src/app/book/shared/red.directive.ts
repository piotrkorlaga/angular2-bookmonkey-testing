import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[bmRed]'
})
export class RedDirective {

  highlighted = false;

  constructor(private el: ElementRef, private renderer: Renderer) {}

  @HostListener('click')
  toggleRed() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.highlighted ? 'red' : '');
    this.highlighted = !this.highlighted;
  }

}
