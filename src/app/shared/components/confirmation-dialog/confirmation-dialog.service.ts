import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from, Observable } from 'rxjs';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { ConfirmMessageDialogComponent } from './confirm-message-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  constructor(
    public dialog: MatDialog
  ) { }

  /**
   * It opens confim message dialog and set modal data
   * @param message set confirmation message
   * @param header set dialog header
   * @param icon set icon name
   * @param yesBtn set first button name
   * @param noBtn  set second button name
   * @returns dialog closed and return true or false to perform further actions
   */
  confirmationBox(
    message: string = "Are you sure, you want to delete selected record(s)?",
    header: string = "Delete",
    icon: string = "cancel",
    yesBtn: string = "Yes",
    noBtn: string = "No"
  ): Observable<any> {
    const dialogRef = this.dialog.open(
      ConfirmationDialogComponent,
      {
        disableClose: true,
        data: {
          message,
          header,
          icon,
          yesBtn,
          noBtn,
        }
      }
    );
    return from(dialogRef.afterClosed());
  }

  /**
   * It opens cancel dialog just to show the user that the operation has been cancelled
   * @param message set confirmation message
   * @param header set dialog header
   * @param icon set icon name
   * @returns dialog close and get true or false
   */
  confirmationCancelBox(
    message: string = "You have cancelled the operation!",
    header: string = "Cancelled",
    icon: string = "remove_circle_outline"
  ): Observable<any> {
    const dialogRef = this.dialog.open(
      ConfirmMessageDialogComponent,
      {
        disableClose: true,
        data: {
          message,
          header,
          icon,
        }
      }
    );
    return from(dialogRef.afterClosed());
  }

  /**
   * It opens success dialog just to show the user that the operation was successful
   * @param message set confirmation message
   * @param header set dialog header
   * @param icon set icon name
   * @returns confimation success dialog close and get true or false
   */
  confirmationSuccessBox(
    message: string = "Record has been deleted successfully",
    header: string = "Deleted",
    icon: string = "check_circle_outline"
  ): Observable<any> {
    const dialogRef = this.dialog.open(
      ConfirmMessageDialogComponent,
      {
        disableClose: true,
        data: {
          message,
          header,
          icon,
        }
      })
    return from(dialogRef.afterClosed());
  }
}
