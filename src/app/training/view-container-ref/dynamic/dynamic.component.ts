import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ContainerChildComponent } from '../container-child/container-child.component';

@Component({
  selector: 'wcg-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent {

  @ViewChild('childContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor() { }

  onAddChild() {
    const componentRef = this.container.createComponent(ContainerChildComponent);
    componentRef.instance.title = `Child #${this.container.length}`;

    console.log(`this.container :>> `, this.container);
  }

  onRemoveComponent() {
    this.container.remove(this.container.length - 1)
  }

}
