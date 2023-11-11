import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'wcg-api-progress-loader',
  template: `
    <div *ngIf="loading" class="loader-container">
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    </div>
  `,
  styles: [`
    .loader-container {
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 2;
    }
    ::ng-deep .mat-mdc-progress-bar {
      background-color: #0060b5;
      border-radius: 2px;
    }
  `]
})
export class ApiProgressLoaderComponent implements OnDestroy {
  subscriptions$!: Subscription;
  loading: boolean = false;

  constructor(
    private loaderService: LoaderService,
    private renderer2: Renderer2
  ) {
    this.subscriptions$ = this.loaderService.isLoading.subscribe((newValue) => {
      this.loading = newValue;  // According to the value subscribed from the interceptor it will update the behaviour
      this.renderer2.setStyle(document.body, 'overflow', this.loading ? 'hidden' : 'auto');
    });
  }

  // unsubscribe to avoid memory leak issue
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}