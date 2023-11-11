import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { COOKIE_DOMAIN, COOKIE_PREFIX } from 'src/environments/environment';
import { HttpService } from './http.service';
import { AUTHENTICATION } from '../constants/api-constants';

import { Observable } from 'rxjs';
import { loginErrorResponse, loginSuccessResponse } from './http-dummy-response-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = {};
  roleAccessList: any = [];
  constructor(
    private httpService: HttpService
  ) { }

  /**
   * Login process
   * @param credentials 
   * @returns response according to the credential provided by the user - user details with token OR error
   */
  login(credentials: any) {
    return Observable.create((observer: any) => {
      if (credentials?.email === 'admin@wcg.com' && credentials?.password === 'wcg@123') {
        observer.next(loginSuccessResponse);
      } else {
        observer.next(loginErrorResponse);
      }
    });

    // let headerDetails = btoa(`${credentials.email}:${credentials.password}`);
    // return this.httpService.loginPost(AUTHENTICATION.LOGIN, headerDetails);
  }

  /**
   * Set the user token in cookie with domain and expiry time
   * @param userToken 
   */
  setAuthToken(userToken: string) {
    let expDateTime = new Date();
    expDateTime.setDate(expDateTime.getDate() + 10);
    const ck = COOKIE_PREFIX + '_token=' + userToken + ';expires=' + expDateTime + ';domain=' + COOKIE_DOMAIN + ';path=/;';
    document.cookie = ck;
  }

  /**
   * Get logged in user's details
   * @returns logged in user's details in decoded form
   */
  getAuthUserData(): any {
    const userToken = this.getAuthToken();
    if (userToken) {
      return jwt_decode(userToken);
    }
    return null;
  }

  /**
   * Get logged in user's token
   * @returns token value from cookie
   */
  getAuthToken(): any {
    return this.getCookie('token') || null;
  }

  /**
   * Check the token is valid or not
   * @returns boolean value
   */
  isAuthTokenValid(): boolean {
    const tokenData = this.getAuthUserData();
    if (tokenData?.exp && tokenData.exp < (new Date().getTime())) {
      return true;
    }
    return false;
  }

  /**
   * Get cookie value based on the argument key name
   * @param key cookie name
   * @returns value of the cookie name
   */
  getCookie(key: string) {
    const cookieName = COOKIE_PREFIX + '_' + key + '=';
    let ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      let c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) === 0) {
        let finalStr = c.substring(cookieName.length, c.length);
        return finalStr;
      }
    }
    return '';
  }

  /**
   * Delete token from cookie and logout the user
   */
  logout() {
    this.deleteCookie('token');
  }

  /**
   * delete specific cookie for the domain
   * @param key cookie name
   */
  deleteCookie(key: string) {
    document.cookie = COOKIE_PREFIX + '_' + key + '=; domain=' + COOKIE_DOMAIN + '; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  /**
   * Get Logged In User's Access List
   * @param isOnlyAccess 
   * @returns access list for the logged in user
   */
  getLoggedInUser(isOnlyAccess: boolean = false) {
    let userToken = this.getAuthToken();
    if (userToken) {
      let tokenSplit = userToken.split('.');
      if (tokenSplit.length && tokenSplit[1]) {
        this.user = JSON.parse(atob(tokenSplit[1]));
        let accessList: any = this.user.userAccess;

        // Added static access
        accessList.push('dashboard');
        this.roleAccessList = accessList;
        return isOnlyAccess ? accessList : this.user;
      } else {
        this.roleAccessList = ['dashboard'];
        return isOnlyAccess ? ['dashboard'] : {};
      }
    } else {
      this.roleAccessList = ['dashboard'];
      return isOnlyAccess ? ['dashboard'] : {};
    }
  }

  /**
   * Get Logged In User's Access Details
   * @returns
   */
  getLoggedInUserAccess() {
    return this.getLoggedInUser(true) || [];
  }

  /**
   * Get Logged In User's Details
   * @returns
   */
  getLoggedInUserDetails(key: string | null = null) {
    const userDetails = this.getLoggedInUser();
    if (key) {
      return userDetails[key] || '';
    } else {
      return userDetails;
    }
  }

  /**
   * Get Logged In User's Role
   * @returns
   */
  getLoggedInUserRole() {
    return this.getLoggedInUser()?.roleType || null;
  }
}
