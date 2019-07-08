import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'persianNumber'
})
export class PersianNumberPipe implements PipeTransform {

  transform(value: any): any {
    if (value === null) {
      return value;
    }

    let result = '';

    value = value + '';

    for (const number of value) {
      result += this.toPersianNumber(number);
    }

    return result;
  }

  private toPersianNumber(number: string): string {
    switch (number) {
      case '0':
        return '۰';
      case '1':
        return '۱';
      case '2':
        return '۲';
      case '3':
        return '۳';
      case '4':
        return '۴';
      case '5':
        return '۵';
      case '6':
        return '۶';
      case '7':
        return '۷';
      case '8':
        return '۸';
      case '9':
        return '۹';
      default:
        return number;
    }
  }
}
