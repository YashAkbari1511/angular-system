import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'wcg-confirmation-dialog',
  template:`
    <mat-dialog-content>
      <mat-icon [class]="data.icon">{{data?.icon}}</mat-icon>
      <h2>{{data?.header}}</h2>
      <p><strong>{{data?.message}}</strong></p>
      <button type="button" class="btn yesbtn" (click)="yes()">{{ data?.yesBtn || 'Yes' }}</button>
      <button type="button" class="btn btn-secondary" (click)="No()">{{ data?.noBtn || 'No' }}</button>
    </mat-dialog-content>
  `,
  styles:[`
    h2 {
      color: black;
    }
    .mat-mdc-dialog-content {
      text-align: center;
    }
    .yesbtn {
      margin-right: 5px;
      background-color: #7066e0;
      color: white;
    }
    .error_outline {
      color: #f8bb86;
    }
    .cancel {
      color: #f27474;
    }
    mat-icon {
      font-size: 120px;
      height: 100%;
      width: 100%;
    }
  `],
})
export class ConfirmationDialogComponent {
  data: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) data: {
      message: string,
      header: string,
      icon: string,
      yesbtn: string,
      nobtn: string,
    },
    public dialogRef: MatDialogRef<any>
  ) {
    this.data = data;
  }

  /**
   * Close the dialog and return true for further process
   */
  yes() {
    this.dialogRef.close(true);
  }

  /**
   * Close the dialog and return false to stop further process
   */
  No() {
    this.dialogRef.close(false);
  }
}
