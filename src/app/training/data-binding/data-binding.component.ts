import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'wcg-data-binding',
  styleUrls: ['./data-binding.component.css'],
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent implements OnInit {

  employees$!: Observable<any>;

  constructor(private employeeService: EmployeeService, private commonService: CommonService) {}

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
    this.setBreadCrumb();
  }

  /**
	 * Set breadCrumbData in CommonService
	 */
	setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Data Binding',
			linkList: [
        {
          label: 'Dashboard',
          link:'/'
        },
        {
          label: 'Data Binding',
          link:''
        },
      ]
    });
	}
}
