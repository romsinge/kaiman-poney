import { Directive, ElementRef, Input, HostListener, Output, EventEmitter } from '@angular/core';
import Poney from '../interfaces/poney';

@Directive({
  selector: '[kmnRacing]'
})
export class RacingDirective {

  @Input('kmnRacing') poney: Poney
  @Output() win: EventEmitter<Poney> = new EventEmitter()
  timeout: any

  constructor(private element: ElementRef) { }

  ngAfterContentChecked() {
    this.element.nativeElement.style.left = `${this.poney.distance}%`;

    if (this.poney.distance >= 80) {
      this.poney.distance = 80
      this.win.emit(this.poney);
    }
  }

  @HostListener('dblclick') handleDoubleClick() {
    if (this.poney.distance >= 80) {
      return false
    }

    clearTimeout(this.timeout)

    this.poney.distance += 10;
    let runningImg = this.poney.img.replace('rainbow', 'running')
    let rainbowImg = runningImg.replace('running', 'rainbow')
    this.poney.img = rainbowImg

    this.timeout = setTimeout(() => {
      this.poney.img = runningImg
    }, 1000)
  }
}
