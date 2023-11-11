import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'wcg-app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class InputOutputChildComponent implements AfterViewInit {

  @Input() userName: any;

  @Output() color = new EventEmitter<string>();

  @ViewChild('viewChild')
  template!: ElementRef;

  selectedColor: string = 'text-dark'

  classNameList: any[] = [
    {
      label: "Text Primary",
      value: "text-primary",
    },
    {
      label: "Text Secondary",
      value: "text-secondary",
    },
    {
      label: "Text Success",
      value: "text-success",
    },
    {
      label: "Text Danger",
      value: "text-danger",
    },
    {
      label: "Text Warning",
      value: "text-warning",
    },
    {
      label: "Text Info",
      value: "text-info",
    },
    {
      label: "Text Dark",
      value: "text-dark",
    }
  ];

  constructor() { }
  
  ngAfterViewInit(): void {
    console.log(this.template);
  }

  onChangeColor() {
    this.color.emit(this.selectedColor);
  }

}
