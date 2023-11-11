import { ChangeDetectorRef, Component, DoCheck, OnInit } from "@angular/core";

@Component({
  selector: "wcg-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"],
})
export class ParentComponent implements OnInit, DoCheck {
  // ngOnDestroy
  destroy: boolean = false;
  // end

  // for ngOnChanges Hook
  myVal: any;
  // end
  i = 0;

  // for ngDoCheck Hook
  lifecycleTicks: number = 0;
  oldTheData: any;
  data: string[] = ["initial"];
  // End
  constructor(private changeDetector: ChangeDetectorRef) {
    // for ngDoCheck Hook
    // this.changeDetector.detach(); // lets the class perform its own change detection
    // setTimeout(() => {
    //   this.oldTheData = "final"; // intentional error
    //   this.data.push("intermediate");
    // }, 3000);
    // setTimeout(() => {
    //   this.data.push("final");
    //   this.changeDetector.markForCheck();
    // }, 6000);
    // end
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  // ngDoCheck
  ngDoCheck() {
    console.log("ngDoCheck");

    // console.log(++this.lifecycleTicks);
    // if (this.data[this.data.length - 1] !== this.oldTheData) {
    //   this.changeDetector.detectChanges();
    // }
  }
  // end

  // ngOnDestroy
  toggleDestroy() {
    this.destroy = !this.destroy;
  }
  // end
}
