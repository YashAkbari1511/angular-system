import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/shared/services/common.service";

// TODO: Component Directives
@Component({
  selector: "wcg-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.scss"],
})
export class DirectivesComponent implements OnInit {
  className: any = "text-secondary";
  classNameList: any[] = [
    {
      label: "Text Primary",
      value: "text-primary",
    },
    {
      label: "Text Secondary",
      value: "text-secondary",
    },
    {
      label: "Text Success",
      value: "text-success",
    },
    {
      label: "Text Danger",
      value: "text-danger",
    },
    {
      label: "Text Warning",
      value: "text-warning",
    },
    {
      label: "Text Info",
      value: "text-info",
    },
    {
      label: "Text Light",
      value: "text-light",
    },
    {
      label: "Text Dark",
      value: "text-dark",
    },
    {
      label: "Text Muted",
      value: "text-muted",
    },
    {
      label: "Text White",
      value: "text-white",
    },
  ];
  backgroundColor: any = "bg-white";
  backgroundColorList: any[] = [
    {
      label: "Bg Primary",
      value: "bg-primary",
    },
    {
      label: "Bg Secondary",
      value: "bg-secondary",
    },
    {
      label: "Bg Success",
      value: "bg-success",
    },
    {
      label: "Bg Danger",
      value: "bg-danger",
    },
    {
      label: "Bg Warning",
      value: "bg-warning",
    },
    {
      label: "Bg Info",
      value: "bg-info",
    },
    {
      label: "Bg Light",
      value: "bg-light",
    },
    {
      label: "Bg Dark",
      value: "bg-dark",
    },
    {
      label: "Bg White",
      value: "bg-white",
    },
  ];
  builtInDirective: string = `<p ngClass="bg-light">Hello</p>`;
  attributeDirective: string = `<p [appHighlight]="color">Highlight me!</p>`;
  structuralDirective: string = `<option *ngFor="let item of classNameList" [value]="item?.value">{{item?.label}}
  </option>`;
  numberOfClicksOutValue: any = 0;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.setBreadCrumb();
  }

  /**
   * Set breadCrumbData in CommonService
   */
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: "Directives",
      linkList: [
        {
          label: "Dashboard",
          link: "/",
        },
        {
          label: "Directives",
          link: "",
        },
      ],
    });
  }

  /**
   * Number Of Clicks Out
   * @param value 
   */
  numberOfClicksOut(value: any) {
    this.numberOfClicksOutValue = value;
  }
}
