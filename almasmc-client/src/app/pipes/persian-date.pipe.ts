import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'persianDate'
})
export class PersianDatePipe implements PipeTransform {

  // 2017-10-24T15:11:09.687
  transform(value: any): any {
    let jy, jm, jd;
    let matched = false;
    if (/^\w{4}-\w{2}-\w{2}$/.test(value)) {
      const date = value.split('-');
      jy = +date[0];
      jm = +date[1];
      jd = +date[2];
      matched = true;
    } else if (/^\w{4}\/\w{2}\/\w{2}$/.test(value)) {
      const date = value.split('/');
      jy = +date[0];
      jm = +date[1];
      jd = +(date[2].substring(0, 2));
      matched = true;
    } else if (/^\w{4}-\w{2}-\w{2}T(.*)$/.test(value)) {
      const date = value.split('-');
      jy = +date[0];
      jm = +date[1];
      jd = +(date[2].substring(0, 2));
      matched = true;
    } else if (/^\w{4}-\w{2}-\w{2}T\w{2}:\w{2}:\w{2}.\w{3}$/.test(value)) {
      const date = value.split('-');
      jy = +date[0];
      jm = +date[1];
      jd = +(date[2].substring(0, 2));
      matched = true;
    } else if (/^\w{4}-\w{2}-\w{2}T\w{2}:\w{2}:\w{2}.\w{2}$/.test(value)) {
      const date = value.split('-');
      jy = +date[0];
      jm = +date[1];
      jd = +(date[2].substring(0, 2));
      matched = true;
    } else if (/^(\w|\w{2})\/(\w|\w{2})\/\w{4} (\w|\w{2}):(\w|\w{2}):\w{2} \w{2}$/.test(value)) {
      const date = value.split('/');
      jy = +(date[2].substring(0, 4));
      jm = +date[0];
      jd = +date[1];
      matched = true;
    } else if (/^(\w|\w{2})\/(\w|\w{2})\/\w{4}$/.test(value)) {
      const date = value.split('/');
      jy = +(date[2].substring(0, 4));
      jm = +date[0];
      jd = +date[1];
      matched = true;
    } else if (/^\w{8}$/.test(value)) {
      jy = +value.substring(0, 4);
      jm = +value.substring(5, 6);
      jd = +value.substring(6, 7);
      matched = true;
    }
    if (matched) {
      if (this.isJalaali(jy)) {
        return this.getDateString(jy, jm, jd);
      } else {
        const result = this.toJalaali(jy, jm, jd);
        return this.getDateString(result.jy, result.jm, result.jd);
      }
    }
    return value;
  }

  private isJalaali(jy) {
    return jy < 1800;
  }

  private getDateString(jy, jm, jd) {
    if (!jm) {
      return jy;
    } else if (!jd) {
      return jy + '/' + this.addPadding(jm);
    } else {
      return jy + '/' + this.addPadding(jm) + '/' + this.addPadding(jd);
    }
  }

  private addPadding(d: number): string {
    if (d < 0) {
      return '00';
    } else if (d >= 0 && d <= 9) {
      return '0' + d;
    } else {
      return '' + d;
    }
  }

  private toJalaali(gy, gm, gd) {
    if (Object.prototype.toString.call(gy) === '[object Date]') {
      gd = gy.getDate();
      gm = gy.getMonth() + 1;
      gy = gy.getFullYear();
    }
    return this.d2j(this.g2d(gy, gm, gd));
  }

  private toGregorian(jy, jm, jd) {
    return this.d2g(this.j2d(jy, jm, jd));
  }

  private isValidJalaaliDate(jy, jm, jd) {
    return jy >= -61 && jy <= 3177 &&
      jm >= 1 && jm <= 12 &&
      jd >= 1 && jd <= this.jalaaliMonthLength(jy, jm);
  }

  private isLeapJalaaliYear(jy) {
    return this.jalCal(jy).leap === 0
  }

  private jalaaliMonthLength(jy, jm) {
    if (jm <= 6) {
      return 31;
    }
    if (jm <= 11) {
      return 30;
    }
    if (this.isLeapJalaaliYear(jy)) {
      return 30;
    }
    return 29;
  }

  private jalCal(jy) {
    // Jalaali years starting the 33-year rule.
    const breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210
      , 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178
    ]
      , bl = breaks.length
      , gy = jy + 621;
    let leapJ = -14
      , jp = breaks[0]
      , jm
      , jump
      , leap
      , leapG
      , march
      , n
      , i;

    if (jy < jp || jy >= breaks[bl - 1]) {
      throw new Error('Invalid Jalaali year ' + jy);
    }

    // Find the limiting years for the Jalaali year jy.
    for (i = 1; i < bl; i += 1) {
      jm = breaks[i];
      jump = jm - jp;
      if (jy < jm) {
        break;
      }
      leapJ = leapJ + this.div(jump, 33) * 8 + this.div(this.mod(jump, 33), 4);
      jp = jm;
    }
    n = jy - jp;

    // Find the number of leap years from AD 621 to the beginning
    // of the current Jalaali year in the Persian calendar.
    leapJ = leapJ + this.div(n, 33) * 8 + this.div(this.mod(n, 33) + 3, 4);
    if (this.mod(jump, 33) === 4 && jump - n === 4) {
      leapJ += 1;
    }

    // And the same in the Gregorian calendar (until the year gy).
    leapG = this.div(gy, 4) - this.div((this.div(gy, 100) + 1) * 3, 4) - 150;

    // Determine the Gregorian date of Farvardin the 1st.
    march = 20 + leapJ - leapG;

    // Find how many years have passed since the last leap year.
    if (jump - n < 6) {
      n = n - jump + this.div(jump + 4, 33) * 33;
    }

    leap = this.mod(this.mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
      leap = 4;
    }

    return {
      leap: leap
      , gy: gy
      , march: march
    }
  }

  j2d(jy, jm, jd) {
    const r = this.jalCal(jy);
    return this.g2d(r.gy, 3, r.march) + (jm - 1) * 31 - this.div(jm, 7) * (jm - 7) + jd - 1;
  }

  d2j(jdn) {
    let jd
      , jm
      , k;

    const gy = this.d2g(jdn).gy; // Calculate Gregorian year (gy).

    let jy = gy - 621;

    const r = this.jalCal(jy)
      , jdn1f = this.g2d(gy, 3, r.march);


    // Find number of days that passed since 1 Farvardin.
    k = jdn - jdn1f;
    if (k >= 0) {
      if (k <= 185) {
        // The first 6 months.
        jm = 1 + this.div(k, 31);
        jd = this.mod(k, 31) + 1;
        return {
          jy: jy
          , jm: jm
          , jd: jd
        }
      } else {
        // The remaining months.
        k -= 186;
      }
    } else {
      // Previous Jalaali year.
      jy -= 1;
      k += 179;
      if (r.leap === 1) {
        k += 1
      }
    }
    jm = 7 + this.div(k, 30);
    jd = this.mod(k, 30) + 1;
    return {
      jy: jy
      , jm: jm
      , jd: jd
    }
  }

  g2d(gy, gm, gd) {
    let d = this.div((gy + this.div(gm - 8, 6) + 100100) * 1461, 4)
      + this.div(153 * this.mod(gm + 9, 12) + 2, 5)
      + gd - 34840408;
    d = d - this.div(this.div(gy + 100100 + this.div(gm - 8, 6), 100) * 3, 4) + 752;
    return d;
  }

  d2g(jdn) {
    let j
      , i
      , gd
      , gm
      , gy;
    j = 4 * jdn + 139361631;
    j = j + this.div(this.div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
    i = this.div(this.mod(j, 1461), 4) * 5 + 308;
    gd = this.div(this.mod(i, 153), 5) + 1;
    gm = this.mod(this.div(i, 153), 12) + 1;
    gy = this.div(j, 1461) - 100100 + this.div(8 - gm, 6);
    return {
      gy: gy
      , gm: gm
      , gd: gd
    };
  }

  div(a, b) {
    return ~~(a / b);
  }

  mod(a, b) {
    return a - ~~(a / b) * b;
  }
}
