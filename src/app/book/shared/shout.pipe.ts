import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shout'
})
export class ShoutPipe implements PipeTransform {

  transform(value: any, suffix = '!!!'): any {
    if (value) {
      return null;
    }

    return `${value.toUppercase()}${suffix}`;
  }

}
