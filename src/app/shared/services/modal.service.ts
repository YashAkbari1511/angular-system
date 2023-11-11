import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) { }

  /**
   * Opens a common dialog using different component and input data
   * @param compoent modal component name
   * @param data set required modal data
   * @returns modal dialog close and return result
   */
  openModal(compoent: any, data: any): Observable<any> {
    const dialogRef = this.dialog.open(
      compoent,
      {
        width: '550px',
        disableClose: true,
        data: data
      }
    )
    return from(dialogRef.afterClosed());
  }
}
