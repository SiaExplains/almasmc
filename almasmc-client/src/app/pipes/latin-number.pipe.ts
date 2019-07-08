import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'latinNumber'
})
export class LatinNumberPipe implements PipeTransform {

  transform(value: any): any {
    if (value === null) {
      return value;
    }

    let result = '';

    value = value + '';

    for (const number of value) {
      result += this.toLatinNumber(number);
    }

    return result;
  }

  private toLatinNumber(number: string): string {
    switch (number) {
      case '۰':
        return '0';
      case '۱':
        return '1';
      case '۲':
        return '2';
      case '۳':
        return '3';
      case '۴':
        return '4';
      case '۵':
        return '5';
      case '۶':
        return '6';
      case '۷':
        return '7';
      case '۸':
        return '8';
      case '۹':
        return '9';
      default:
        return number;
    }
  }

}
