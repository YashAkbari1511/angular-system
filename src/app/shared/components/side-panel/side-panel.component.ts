import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'wcg-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements AfterViewInit {
  @ViewChild('drawer') public drawer!: MatDrawer;
  @Input() panelHeader: any;
  @Output() closePanel = new EventEmitter()

  constructor() { }

  //Open side panel
  ngAfterViewInit(): void {
    this.drawer.toggle();
  }

  //Close side panel
  close() {
    this.drawer.toggle();
    setTimeout(() => {
      this.closePanel.emit("Closed");
    }, 200);
  }
}
