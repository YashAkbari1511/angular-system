import { Component, OnInit } from "@angular/core";

@Component({
  selector: "wcg-c",
  templateUrl: "./c.component.html",
  styleUrls: ["./c.component.scss"],
})
export class CComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("Component C");
  }
}
