import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/shared/services/common.service";

@Component({
  selector: "wcg-track-by",
  templateUrl: "./track-by.component.html",
  styleUrls: ["./track-by.component.scss"],
})
export class TrackByComponent implements OnInit {
  store: any;

  constructor(private commonService: CommonService) {
    // Track By Example
    this.getData();
  }

  ngOnInit(): void {
    this.setBreadCrumb();
  }

  // Track By Example
  getData() {
    this.store = [
      {
        id: 1,
        f_name: "John",
        l_name: "Peter",
        mobile: 1234567890,
        email: "johnpeter@gmail.com",
      },
      {
        id: 2,
        f_name: "Doe",
        l_name: "Peter",
        mobile: 1234567890,
        email: "doepeter@gmail.com",
      },
      {
        id: 3,
        f_name: "Test",
        l_name: "Peter",
        mobile: 1234567890,
        email: "testpeter@gmail.com",
      },
    ];
  }
  // Track By Example
  trackByFn(index: any, item: any) {
    return index;
  }

  getNewData() {
    this.store = [
      {
        id: 1,
        f_name: "John",
        l_name: "Peter",
        mobile: 1234567890,
        email: "johnpeter@gmail.com",
      },
      {
        id: 2,
        f_name: "Doe",
        l_name: "Peter",
        mobile: 1234567890,
        email: "doepeter@gmail.com",
      },
      {
        id: 3,
        f_name: "Test",
        l_name: "Peter",
        mobile: 1234567890,
        email: "testpeter@gmail.com",
      },
      {
        id: 4,
        f_name: "Sam",
        l_name: "rock",
        mobile: 1234567890,
        email: "samrock@getMaxListeners.com",
      },
      {
        id: 5,
        f_name: "Kelly",
        l_name: "rock",
        mobile: 1234567890,
        email: "kellyrock@getMaxListeners.com",
      },
      {
        id: 6,
        f_name: "Thor",
        l_name: "rock",
        mobile: 1234567890,
        email: "thorrock@getMaxListeners.com",
      },
      {
        id: 7,
        f_name: "Thor",
        l_name: "rock",
        mobile: 1234567890,
        email: "thorrock@getMaxListeners.com",
      },
      {
        id: 8,
        f_name: "Thor",
        l_name: "rock",
        mobile: 1234567890,
        email: "thorrock@getMaxListeners.com",
      },
      {
        id: 9,
        f_name: "Thor",
        l_name: "rock",
        mobile: 1234567890,
        email: "thorrock@getMaxListeners.com",
      },
      {
        id: 10,
        f_name: "Thor",
        l_name: "rock",
        mobile: 1234567890,
        email: "thorrock@getMaxListeners.com",
      },
    ];
  }
  /**
   * Set breadCrumbData in CommonService
   */
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: "Track by",
      linkList: [
        {
          label: "Dashboard",
          link: "/",
        },
        {
          label: "Track by",
          link: "",
        },
      ],
    });
  }
}
