import { Component, Input } from '@angular/core';

@Component({
  selector: 'wcg-spinner-loader',
  template: `
    <div *ngIf="isSpinning" class="spinnerOverlay">
      <mat-progress-spinner style="margin: 2px auto;" mode="indeterminate" diameter="40">
      </mat-progress-spinner>
      <div class="text-black-50" *ngIf="message">{{message}}</div>
    </div>
  `,
  styles: [`
    .spinnerOverlay {
      position: absolute;
      top: 50%;
      left: 50%;
      -moz-transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
    }
  `],
})
export class SpinnerLoaderComponent {
  @Input() isSpinning: boolean = true;
  @Input() message: any = "Loading";

  constructor() { }
}