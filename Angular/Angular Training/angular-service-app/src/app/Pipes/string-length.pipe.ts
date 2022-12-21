import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class StringLengthPipe implements PipeTransform {

  transform(value: string[]): number[] {
   let length: number[] = [];
    value.forEach(element => {
      length.push(element.length);
    });
    return length;
  }

}
