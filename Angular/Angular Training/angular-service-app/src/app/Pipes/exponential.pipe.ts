import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number, raiseTo: number): unknown {
    return Math.pow(value, raiseTo);
  }

}
