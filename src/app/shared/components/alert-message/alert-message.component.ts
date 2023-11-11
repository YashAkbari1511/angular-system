import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertMessage } from './alert-message';
import { AlertMessageService } from './alert-message.service';

@Component({
  selector: 'wcg-alert-message',
  templateUrl: './alert-message.component.html',
  styles: [`
    .alertdialog {
      position: fixed;
      top: 50;
      top: 70px;
      right: 10px;
      width: 80%;
      max-width: 400px;
    }
    .alert-success {
      background-color: #54a254;
    }
    .alert-danger {
      background-color: #842029;
    }
    .alert-info {
      background-color: #055160;
    }
    .alert-warning {
      background-color: #664d03;
    }
    .mat-icon {
      overflow: unset;
    }
  `],

  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit, OnDestroy {
  subscriptions$!: Subscription;
  alertArray: AlertMessage[] = [];
  alertInterval: any = null;
  constructor(private alertMessageService: AlertMessageService) { }

  ngOnInit(): void {
    this.subscriptions$ = this.alertMessageService.alertMessage.subscribe({
      next: (res: any) => {
        this.alertArray = res;
        if (!this.alertInterval) {
          this.alertInterval = setInterval(() => {
            this.checkAlerts()
          }, 1000);
        }
      }
    });
  }

  // unsubscribe to avoid memory leak issue
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  /**
   * Remove specific message from the message array based on the index
   * @param index remove specific index from the message array
   */
  dismissAlert(index: number) {
    this.alertArray.splice(index, 1)
  }

  /**
   * Check the alert messages and removed if the message if the timer passed and
   * Clear the Interval if all the messaages has been dismissed
   */
  checkAlerts() {
    if (this.alertArray.length > 0) {
      let currentTime = new Date().getTime();
      this.alertArray.forEach((alertRow: any, i: number) => {
        if (currentTime - alertRow.createdAt > alertRow.time) {
          this.dismissAlert(i)
        }
      });
    } else {
      clearInterval(this.alertInterval)
      this.alertInterval = null;
    }
  }
}