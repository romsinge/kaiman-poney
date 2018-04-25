import { Pipe, PipeTransform } from '@angular/core';
import Poney from '../interfaces/poney';

@Pipe({
  name: 'isRacing'
})
export class IsRacingPipe implements PipeTransform {

  transform(ponies: Poney[], poneyIds:number[]): Poney[] {
    return !ponies ? [] : ponies.filter(poney => poneyIds.includes(poney.id));
  }

}
