import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'wcg-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.setBreadCrumb();
  }

  /**
	 * Set breadCrumbData in CommonService
	 */
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Settings',
      linkList: [
        { label: 'Dashboard', link: '/dashboard' },
        { label: 'Settings', link: '' }
      ]
    });
  }
}