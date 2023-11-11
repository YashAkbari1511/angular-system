import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'wcg-confirm-message-dialog',
  template: `
    <mat-dialog-content>
      <mat-icon [class]="data.icon">{{data?.icon}}</mat-icon>
      <h2>{{data?.header}}</h2>
      <p><strong>{{data?.message}}</strong></p>
      <button type="button" class="btn okbtn" (click)="closeModal()">Ok</button>
    </mat-dialog-content>
  `,
  styles: [`
    h2{
      color: black;
    }
    .mat-mdc-dialog-content {
      text-align: center;
    }
    mat-icon{
        font-size: 120px;
        height: 100%;
        width: 100%;
    }
    .check_circle_outline{
        color: #72ad72;
    }
    .remove_circle_outline{
        color:#f27474;;
    }
    .okbtn{
        background-color:#7066e0;
        color:white;
    }
  `],
})
export class ConfirmMessageDialogComponent {
  data: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: {
      message: string,
      header: string,
      icon: string
    },
    public dialogRef: MatDialogRef<any>
  ) {
    this.data = data;
  }

  /**
   * Close the dialog
   */
  closeModal() {
    this.dialogRef.close();
  }
}
