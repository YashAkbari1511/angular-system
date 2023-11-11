import { Component } from '@angular/core';
import { Activity, activities } from './activity-timeline-data';

@Component({
  selector: 'wcg-activity-timeline',
  templateUrl: './activity-timeline.component.html'
})
export class ActivityTimelineComponent {
  activityData: Activity[];

  constructor() {
    this.activityData = activities;
  }

}