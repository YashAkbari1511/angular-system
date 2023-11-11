import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'wcg-page-not-found',
  templateUrl: './page-not-found.component.html',
  styles: [`
    .center-white{
      text-align: center;
      color: white;
      padding: 50px 20px 20px;
    }
    a.lightLink{
      cursor:pointer;
      text-decoration: underline;
      color: rgb(115 203 255);
    }
  `]
})
export class PageNotFoundComponent {

  constructor(
    private location: Location
  ) { }

  back() {
    this.location.back();
  }
}