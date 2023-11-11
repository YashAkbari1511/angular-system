import { Component } from '@angular/core';

@Component({
  selector: 'wcg-root',
  template: `
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <wcg-alert-message class="alertdialog"></wcg-alert-message>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .alertdialog {
      position: fixed;
      top: 4px;
      right: 5px;
      width: 90%;
      max-width: 400px;
      z-index: 2;
    }
  `],
})
export class AppComponent { }