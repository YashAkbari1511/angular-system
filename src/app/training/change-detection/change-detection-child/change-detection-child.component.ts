import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";

@Component({
  selector: "wcg-change-detection-child",
  templateUrl: "./change-detection-child.component.html",
  styleUrls: ["./change-detection-child.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionChildComponent implements OnInit {
  @Input() person: any;

  constructor() {}

  ngOnInit(): void {
    console.log("Change Detection Child");
  }
}

export interface Person {
  name: string;
  age: number;
}
