import { Component, Input, ElementRef } from '@angular/core';
import Poney from '../../interfaces/poney';

@Component({
  selector: 'kmn-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent {

  @Input() poney: Poney

  constructor(private element: ElementRef) { }

}
