import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'wcg-trackby',
  templateUrl: './trackby.component.html',
  styles:[`
    li{
      list-style: none;
    }
  `]
})
export class TrackbyComponent implements OnInit {
  items: any[] = [];

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.setBreadCrumb();
    this.setItems();
  }

  /**
   * Set breadCrumbData in CommonService
   */
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Track By',
      linkList: [
        {
          label: 'Dashboard',
          link: '/'
        },
        {
          label: 'Track By',
          link: ''
        },
      ]
    });
  }

  setItems() {
    this.items = [
      {
        id: 1,
        name: 'Web',
      },
      {
        id: 2,
        name: 'Code',
      },
      {
        id: 3,
        name: 'Genie',
      },
      {
        id: 4,
        name: 'Atul',
      },
      {
        id: 5,
        name: 'Agrawal',
      }
    ];
  }
  changeIds() {
    this.items = [
      {
        id: 10,
        name: 'Web',
      },
      {
        id: 20,
        name: 'Code',
      },
      {
        id: 3,
        name: 'Genie',
      },
      {
        id: 4,
        name: 'Atul',
      },
      {
        id: 5,
        name: 'Agrawal',
      }
    ];
  }

  trackByItems(index: number, item: any): number {
    return item.id;
  }
}
