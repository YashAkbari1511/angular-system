import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/shared/services/common.service";
import { Person } from "./change-detection-child/change-detection-child.component";

@Component({
  selector: "wcg-change-detection",
  templateUrl: "./change-detection.component.html",
  styleUrls: ["./change-detection.component.scss"],
})
export class ChangeDetectionComponent implements OnInit {
  public person: Person = {
    name: "John Doe",
    age: 20,
  };
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.setBreadCrumb();
  }
  public reassign(): void {
    this.person = {
      name: this.person.name,
      age: this.person.age,
    };
  }
  /**
   * Set breadCrumbData in CommonService
   */
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: "Change Detection",
      linkList: [
        {
          label: "Dashboard",
          link: "/",
        },
        {
          label: "Change Detection",
          link: "",
        },
      ],
    });
  }
}
