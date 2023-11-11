import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[wcgButtonClickCount]",
})
export class ButtonClickCountDirective {
  @Output() numberOfClicksOut = new EventEmitter<any>();
  numberOfClicks = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("click", ["$event.target"])
  onClick(btn: any) {
    this.numberOfClicks++;
    this.renderer.removeClass(this.el.nativeElement, "bg-success");
    this.renderer.removeClass(this.el.nativeElement, "bg-danger");
    this.renderer.addClass(
      this.el.nativeElement,
      this.numberOfClicks % 2 == 0 ? "bg-success" : "bg-danger"
    );
    this.numberOfClicksOut.emit(this.numberOfClicks);
  }
}
