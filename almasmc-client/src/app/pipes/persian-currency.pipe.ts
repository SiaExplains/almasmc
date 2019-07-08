import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'persianCurrency'
})
export class PersianCurrencyPipe implements PipeTransform {

  transform(value: any): any {
    if (isNaN(Number(value))) {
      return;
    }

    const normalizedNumber = (Number(value) / 1000000).toFixed(1);

    return this.separateEveryThreeDigits(normalizedNumber);
  }

  private separateEveryThreeDigits(num: string): string {
    const str = num.split('.');
    if (str[0].length >= 4) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 4) {
      str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
  }

}
