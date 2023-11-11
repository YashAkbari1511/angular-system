import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/shared/services/common.service";

@Component({
  selector: "wcg-pipes",
  templateUrl: "./pipes.component.html",
  styleUrls: ["./pipes.component.scss"],
})
export class PipesComponent implements OnInit {
  studentList: any = [
    {
      id: 1,
      firstName: "bhargavi",
      lastName: "chitroda",
      mobile: "9876543210",
      email: "BHARGAVI@WEBCODEGENIE.COM",
      birthDate: new Date('Dec 01 2000'),
      percentage: 82,
      pendingFees: 60,
    },
    {
      id: 2,
      firstName: "chandani",
      lastName: "darji",
      mobile: "9080706050",
      email: "CHANDANI@WEBCODEGENIE.COM",
      birthDate: new Date('Feb 08 2000'),
      percentage: 92,
      pendingFees: 50,
    },
  ];

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.setBreadCrumb();
  }

  /**
   * Set breadCrumbData in CommonService
   */
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: "Pipes",
      linkList: [
        {
          label: "Dashboard",
          link: "/",
        },
        {
          label: "Pipes",
          link: "",
        },
      ],
    });
  }
}
