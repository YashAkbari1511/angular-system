import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  userTimeZone: string = '';

  constructor(private authService: AuthService, public datepipe: DatePipe) {
    // First get timezone value from Logged In User Details
    this.userTimeZone = this.authService.getLoggedInUserDetails('timezone');
  }
  /**
   * 
   * @param value date
   * @param type pipe type
   * @returns convert date format
   */
  transform(value: Date | string, type: string = 'default'): any {
    let formatType: any = null;
    switch (type) {
      case 'withTime':
        formatType = 'short';
        break;
      case 'monthYear':
        formatType = 'MMMM YYYY';
        break;
      case 'onlyDate':
        formatType = 'shortDate';
        break;
      default:
        formatType = 'YYYY-MM-dd';
        break;
    }
    return this.datepipe.transform(value, formatType, this.userTimeZone);
  }
}