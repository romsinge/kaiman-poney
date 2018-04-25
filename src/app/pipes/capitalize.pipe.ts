import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let newValue = value.charAt(0).toUpperCase() + value.substr(1).toLowerCase()

    return newValue;
  }

}
