import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { USER_MANAGEMENT } from '../constants/api-constants';

import { Observable, Observer } from 'rxjs';
import { userCreateResponse, userDeleteResponse, userDetailResponse, userEmailCheckExistResponse, userEmailCheckResponse, userListResponse, userStatusChangeResponse, userUpdateResponse } from './http-dummy-response-data';
import { AlertMessageService } from '../components/alert-message/alert-message.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(
    private httpService: HttpService,
    private alertMessageService: AlertMessageService
  ) { }
  /**
   * 
   * @param params request
   * @returns api call and return user response 
   */
  read(params: any) {
    return new Observable((observer: Observer<any>) => {
      observer.next(userListResponse);
    });

    // return this.httpService.get(USER_MANAGEMENT.LIST, params);
  }
  /**
   * Delete user based on selected userId
   * @param userId userid
   * @param flashMsg true or false
   * @returns particular userid record delete from userlist
   */
  delete(userId: string, flashMsg: boolean = false) {
    return new Observable((observer: Observer<any>) => {
      observer.next(userDeleteResponse);
    });

    // return this.httpService.delete(USER_MANAGEMENT.DELETE + userId, flashMsg);
  }

  /**
   * 
   * @param userId userId
   * @param data request
   * @param flashMsg true or false
   * @returns update particular userid record status from userlist and set active/inactive record
   */
  changeUserStatus(userId: any, data: any, flashMsg: boolean = false) {
    return new Observable((observer: Observer<any>) => {
      observer.next(userStatusChangeResponse);
    });

    // return this.httpService.put(USER_MANAGEMENT.CHANGE_STATUS + userId, data, flashMsg);
  }
  /**
   * 
   * @param data request array
   * @param flashMsg true or false
   * @returns get created user
   */
  create(data: any = {}, flashMsg: boolean = true) {
    return new Observable((observer: Observer<any>) => {
      if (flashMsg) {
        this.alertMessageService.success('', userCreateResponse.message);
      }
      observer.next(userCreateResponse);
    });

    return this.httpService.post(USER_MANAGEMENT.ADD, data, flashMsg);
  }
  /**
   * 
   * @param data request array
   * @param userId userid
   * @param flashMsg true or false
   * @returns modify particular userid record
   */
  update(data: any = {}, userId: string = '', flashMsg: boolean = true) {
    return new Observable((observer: Observer<any>) => {
      if (flashMsg) {
        this.alertMessageService.success('', userUpdateResponse.message);
      }
      observer.next(userUpdateResponse);
    });

    // return this.httpService.put(USER_MANAGEMENT.EDIT + userId, data, flashMsg);
  }

  /**
   * User Detail Record
   * @param userId userId
   * @returns get particular id user record
   */
  userDetail(userId: any) {
    return new Observable((observer: Observer<any>) => {
      observer.next(userDetailResponse);
    });

    // return this.httpService.get(USER_MANAGEMENT.USER_DETAILS + userId);
  }
  /**
   * 
   * @param data emailid
   * @returns check emailid duplucate or not and retutn true or false
   */
  checkDuplicateEmail(data: any = {}) {
    return new Observable((observer: Observer<any>) => {
      if (data?.email === 'admin@wcg.com') {
        observer.next(userEmailCheckExistResponse);
      } else {
        observer.next(userEmailCheckResponse);
      }
    });

    // return this.httpService.post(AUTHENTICATION.CHECK_EMAIL, data, false);
  }
}
