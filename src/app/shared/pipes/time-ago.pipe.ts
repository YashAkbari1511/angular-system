import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  userTimeZone: string = '';

  constructor(private authService: AuthService, public datepipe: DatePipe) {
    this.userTimeZone = this.authService.getLoggedInUserDetails('timezone');
  }
  /**
   * 
   * @param value get enddate value
   * @param args display short/full format
   * @returns intervals value 
   */
  transform(value: any, args: string = 'full'): any {
    if (value) {
      // Get Start     
      let startime: any = this.datepipe.transform(new Date(), 'medium', this.userTimeZone)
      let StartTime = Date.parse(startime);

      let endttime: any = this.datepipe.transform(value, 'medium', this.userTimeZone)
      let EndTime = Date.parse(endttime)
      const seconds = Math.floor(StartTime - EndTime) / 1000;

      // less than 30 seconds ago will show as 'Just now'
      if (seconds < 29)
        return 'now';
      const intervals: any = {
        y: {
          short: 'y',
          full: 'year',
          seconds: 31536000
        },
        m: {
          short: 'mon',
          full: 'month',
          seconds: 2592000
        },
        w: {
          short: 'w',
          full: 'week',
          seconds: 604800
        },
        dy: {
          short: 'dy',
          full: 'day',
          seconds: 86400
        },
        hr: {
          short: 'hr',
          full: 'hour',
          seconds: 3600
        },
        min: {
          short: 'min',
          full: 'minute',
          seconds: 60
        },
        s: {
          short: 's',
          full: 'second',
          seconds: 1
        },
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i].seconds);
        if (counter > 0) {
          return counter + ' ' + intervals[i][args];
        }
      }
    }
    return value;
  }
}
