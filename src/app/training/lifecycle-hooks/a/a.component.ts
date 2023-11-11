import { Component, OnInit } from "@angular/core";

@Component({
  selector: "wcg-a",
  templateUrl: "./a.component.html",
  styleUrls: ["./a.component.scss"],
})
export class AComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("Component A");
  }
}
