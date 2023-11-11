import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { CComponent } from "../c/c.component";

@Component({
  selector: "wcg-b",
  templateUrl: "./b.component.html",
  styleUrls: ["./b.component.scss"],
})
export class BComponent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  // ngAfterViewInit

  @ViewChild("BStatement", { read: ElementRef }) pStmt: any;

  //end

  // ngAfterContentInit

  @ContentChild("BHeader", { read: ElementRef }) hRef: any;
  @ContentChild(CComponent, { read: ElementRef }) cRef: any;

  // end
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log("Component B");
  }
  // ngAfterContentInit

  ngAfterContentInit() {
    console.log("After Content Init");

    // this.renderer.setStyle(
    //   this.hRef.nativeElement,
    //   "background-color",
    //   "yellow"
    // );

    // this.renderer.setStyle(
    //   this.cRef.nativeElement.children.item(0),
    //   "background-color",
    //   "pink"
    // );
    // this.renderer.setStyle(
    //   this.cRef.nativeElement.children.item(1),
    //   "background-color",
    //   "red"
    // );
  }
  // end

  // ngAfterContentChecked

  ngAfterContentChecked() {
    console.log("After Content Checked");

    // this.renderer.setStyle(
    //   this.hRef.nativeElement,
    //   "background-color",
    //   this.randomRGB()
    // );
    // this.renderer.setStyle(
    //   this.cRef.nativeElement.children.item(0),
    //   "background-color",
    //   this.randomRGB()
    // );
    // this.renderer.setStyle(
    //   this.cRef.nativeElement.children.item(1),
    //   "background-color",
    //   this.randomRGB()
    // );
  }

  // ngAfterViewInit
  ngAfterViewInit() {
    console.log("After View Init");

    // this.renderer.setStyle(
    //   this.pStmt.nativeElement,
    //   "background-color",
    //   "yellow"
    // );
  }

  //end

  // ngAfterViewChecked

  ngAfterViewChecked() {
    console.log("After View Checked");

    // this.renderer.setStyle(
    //   this.pStmt.nativeElement,
    //   "background-color",
    //   this.randomRGB()
    // );
  }
  // end

  // ngAfterContentChecked and  ngAfterViewChecked
  randomRGB(): string {
    return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
  }
  //end
}
