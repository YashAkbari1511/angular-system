import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "wcg-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"],
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() myValProp: any;
  propChanges: any;

  constructor() {}
  // called when parent component value has changed

  ngOnChanges(changes: SimpleChanges) {
    this.propChanges = this.myValProp;
  }

  ngOnInit(): void {
    console.log("Child Component");
  }
}
