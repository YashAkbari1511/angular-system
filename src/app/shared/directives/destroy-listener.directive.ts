import { Directive, OnDestroy } from "@angular/core";

@Directive({
  selector: "[wcgDestroyListener]",
})
export class DestroyListenerDirective implements OnDestroy {
  constructor() {}
  ngOnDestroy() {
    console.log("Goodbye World!");
  }
}
