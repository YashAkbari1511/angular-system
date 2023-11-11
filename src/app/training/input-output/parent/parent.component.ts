import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { InputOutputChildComponent } from '../child/child.component';

@Component({
  selector: 'wcg-app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class InputOutputParentComponent implements OnInit, AfterViewInit {

  @ViewChild(InputOutputChildComponent, { static: false })
  childComponent!: InputOutputChildComponent;

  selectedOption: string = 'Jack Aranda';
  textColor: string = 'text-dark'

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.setBreadCrumb();
  }

  ngAfterViewInit(): void {
    console.log(this.childComponent)
  }

  /**
   * Set breadCrumbData in CommonService
   */
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: "Input Output",
      linkList: [
        {
          label: "Dashboard",
          link: "/",
        },
        {
          label: "Input - Output",
          link: "",
        },
      ],
    });
  }

  changeColor(colorName: string) {
    this.textColor = colorName;
  }

}
