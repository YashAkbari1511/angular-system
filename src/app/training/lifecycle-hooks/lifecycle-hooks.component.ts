import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'wcg-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styles: [``],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifecycleHooksComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // , OnChanges
  @Input() message: string = '';

  constructor(
    // private cd: ChangeDetectorRef,
    private commonService: CommonService
  ) {
    console.log(`constructor :>> `);
  }

  /**
	 * Set breadCrumbData in CommonService
	 */
	setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Lifecycle Hooks',
			linkList: [
        {
          label: 'Dashboard',
          link:'/'
        },
        {
          label: 'Lifecycle Hooks',
          link:''
        },
      ]
    });
	}
  clickMe() {
    console.log("clickMe : >>")
    this.message = (new Date()).toString();
  }
  renderHTML() {
    console.log("renderHTML : >>")
  }

  ngOnInit() {
    console.log(`ngOnInit :>> `);
    this.setBreadCrumb();
  }
  ngDoCheck() {
    console.log(`ngDoCheck :>> `);
  }
  ngAfterContentInit() {
    console.log(`ngAfterContentInit :>> `);
  }
  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked :>> `);
  }
  ngAfterViewInit() {
    console.log(`ngAfterViewInit :>> `);
  }
  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked :>> `, this.message);
  }
  ngOnDestroy() {
    console.log(`ngOnDestroy :>> `);
  }

  /**
   * This method will only execute when there is a chahge in the input data from the parent component
   * @param changes it has the changes in the input data including previous and current values
   */
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges ==> ', changes);
  // }
}