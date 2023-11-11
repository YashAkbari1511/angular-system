import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AlertMessage } from './alert-message';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  msg: AlertMessage[] = [];
  alertMessage = new BehaviorSubject(<any>[]);

  constructor() { }
  /**
   * Push the new success message into message array and emit the latest message array
   * @param title set alert title
   * @param message set alert message
   * @param time to dismiss the alert box automatically after this much miliseconds
   */
  success(title: string = '', message: string = '', time: number = 5000) {
    this.msg.push({ title, message, type: 'success', time, createdAt: new Date().getTime() });
    this.alertMessage.next(this.msg);
  }

  /**
   * Push the new error message into message array and emit the latest message array
   * @param title set alert title
   * @param message set alert message
   * @param time to dismiss the alert box automatically after this much miliseconds
   */
  error(title: string = '', message: string = '', time: number = 5000) {
    this.msg.push({ title, message, type: 'danger', time, createdAt: new Date().getTime() });
    this.alertMessage.next(this.msg);
  }

  /**
   * Push the new info message into message array and emit the latest message array
   * @param title set alert title
   * @param message set alert message
   * @param time to dismiss the alert box automatically after this much miliseconds
   */
  info(title: string = '', message: string = '', time: number = 5000) {
    this.msg.push({ title, message, type: 'info', time, createdAt: new Date().getTime() });
    this.alertMessage.next(this.msg);
  }

  /**
   * Push the new warning message into message array and emit the latest message array
   * @param title set alert title
   * @param message set alert message
   * @param time to dismiss the alert box automatically after this much miliseconds
   */
  warning(title: string = '', message: string = '', time: number = 5000) {
    this.msg.push({ title, message, type: 'warning', time, createdAt: new Date().getTime() });
    this.alertMessage.next(this.msg);
  }
}