import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'wcg-access-denied',
  templateUrl: './access-denied.component.html',
  styles: [`
    .center-black-text{
      text-align: center;
      color: rgba(0, 0, 0, 0.87);
      padding: 50px 20px 20px;
    }
    a.darkBlueLink{
      cursor:pointer;
      text-decoration: underline;
      color: rgb(21 144 253);
    }
  `]
})
export class AccessDeniedComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.setBreadCrumb();
  }

  /**
	 * Set breadCrumbData in CommonService
	 */
	setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Access Denied',
			linkList: []
    });
	}

  back() {
    this.location.back();
  }
}