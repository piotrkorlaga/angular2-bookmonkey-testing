import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shout'
})
export class ShoutPipe implements PipeTransform {

  transform(value: any /* string */, suffix = '!!!'): any {
    if (typeof value === 'string' && value.length > 0) {
      return `${value.toUpperCase()}${suffix}`;
    }

    return null;
  }

}
