import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Event, NavigationEnd, Router } from '@angular/router';
import { MENUITEMS } from 'src/app/shared/constants/menu-items';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wcg-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnDestroy {
  selectedPanel: string = '';
  menuItems = MENUITEMS;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  subscriptions$!: Subscription;

  constructor(
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    // Detect route change and update the selected menu 
    this.subscriptions$ = this.router.events.subscribe((ev: Event) => {
      if (ev instanceof NavigationEnd) {
        this.selectedPanel = '';
        this.menuItems.find((m: any) => {
          let tmpSubmenu = (m?.children) ? m.children.find((c: any) => c.route === this.router.url) : null;
          if (tmpSubmenu) {
            this.selectedPanel = m?.panelName;
          }
        });
      }
    });

    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  // unsubscribe to avoid memory leak issue
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
    this.subscriptions$.unsubscribe();
  }
}
