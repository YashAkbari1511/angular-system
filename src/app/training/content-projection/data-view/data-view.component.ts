import { Component, Input } from '@angular/core';

@Component({
  selector: 'wcg-data-view',
  templateUrl: './data-view.component.html',
  styles: [`
    :host {
      /* width: 48%;
      margin: 1%;
      float: left; */
    }
  `]
})
export class DataViewComponent {
  @Input() icon = '';
  @Input() caption = '';
}
