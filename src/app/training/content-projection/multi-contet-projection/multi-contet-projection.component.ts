import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'wcg-multi-contet-projection',
  templateUrl: './multi-contet-projection.component.html',
  styles: [``]
})
export class MultiContetProjectionComponent implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.setBreadCrumb();
  }

  /**
   * Set breadCrumbData in CommonService
   */
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: ' Multi-Slot Content Projection',
      linkList: [
        {
          label: 'Dashboard',
          link: '/'
        },
        {
          label: ' Multi-Slot Content Projection',
          link: ''
        },
      ]
    });
  }

}
