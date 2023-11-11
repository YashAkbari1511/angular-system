import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {
  /**
   * 
   * @param mobileNumber get 10 digits mobile number
   * @returns set mobile number format 
   */
  transform(mobileNumber: any) {
    if (mobileNumber) {
      let mobile = String(mobileNumber).slice(-10);
      let mobileOperation = `(${String(mobile).substring(0, 3)}) ${String(mobile).substring(3, 6)}-${String(mobile).substring(6, mobile.length + 1)}`;
      return mobileOperation;
    } else {
      return '-';
    }
  }
}
