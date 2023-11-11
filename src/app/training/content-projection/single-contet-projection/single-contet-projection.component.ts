import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'wcg-single-contet-projection',
  templateUrl: './single-contet-projection.component.html',
  styles: [``]
})
export class SingleContetProjectionComponent implements OnInit {
  @Input() isMultiContentProjection: boolean = false;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    if(!this.isMultiContentProjection)
      this.setBreadCrumb();
  }

  /**
   * Set breadCrumbData in CommonService
   */
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Single-Slot Content Projection',
      linkList: [
        {
          label: 'Dashboard',
          link: '/'
        },
        {
          label: 'Single-Slot Content Projection',
          link: ''
        },
      ]
    });
  }

  printData(data: any){
    console.log(`data :>> `, data);
  }

}
