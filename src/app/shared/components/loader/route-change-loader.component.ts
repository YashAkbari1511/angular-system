import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wcg-route-change-loader',  // show loader screen till route change is in progress
  template: `
    <div class="preloader" *ngIf="isSpinnerVisible">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class RouteChangeLoaderComponent implements OnDestroy {
  isSpinnerVisible = true;

  @Input() backgroundColor = 'rgba(0, 115, 170, 0.69)';
  subscriptions$!: Subscription;
  constructor(
    private router: Router,
  ) {
    this.subscriptions$ = this.router.events.subscribe({
      next: (event: any) => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.isSpinnerVisible = false;
        }
      },
      error: (err: any) => {
        this.isSpinnerVisible = false;
      }
    });
  }

  // unsubscribe to avoid memory leak issue
  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
    this.subscriptions$.unsubscribe();
  }
}
