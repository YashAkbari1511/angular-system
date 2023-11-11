import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Pipe({
  name: 'loggedInUser',
})
export class LoginUserDetailsPipe implements PipeTransform {
  loggedInUserDetails: any = null;

  constructor(
    private authService: AuthService,
  ) {
    this.loggedInUserDetails = this.authService.getLoggedInUserDetails();
  }
  /**
   * 
   * @param key get userid
   * @returns get logged in user details
   */
  transform(key: string): unknown {
    let result: any = null;
    switch (key) {
      case 'fullName':
        result = `${this.loggedInUserDetails['firstName']} ${this.loggedInUserDetails['lastName']}`;
        break;
      case 'profilePhoto':
        result = this.loggedInUserDetails[key] ? this.loggedInUserDetails[key] : '';
        break;
      case 'switchToken':
        result = this.loggedInUserDetails['switchToken'] ? this.loggedInUserDetails['switchToken'] : null;
        break;
      default:
        result = this.loggedInUserDetails[key];
        break;
    }
    return result;
  }
}
