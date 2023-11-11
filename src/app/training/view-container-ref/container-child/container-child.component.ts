import { Component } from '@angular/core';

@Component({
  selector: 'wcg-container-child',
  templateUrl: './container-child.component.html',
  styleUrls: ['./container-child.component.scss']
})
export class ContainerChildComponent {

  title: string = '';

  constructor() { }

}