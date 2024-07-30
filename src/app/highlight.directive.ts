import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string = "yellow";

  private isHighlighted = false;

  constructor(private el: ElementRef) { }

  @HostListener('click') onMouseClick() {
    this.toggleHighlight();
  }

  private toggleHighlight() {
    if (this.isHighlighted) {
      this.el.nativeElement.style.backgroundColor = ''
    } else {

      this.el.nativeElement.style.backgroundColor = this.highlightColor;
    }

    this.isHighlighted = !this.isHighlighted;
  }
}
