import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { User } from './user.model';

@Component({
  selector: 'wcg-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styles: [`
    .invalid-data {
      border: 1px solid red;
    }
  `]
})
export class TemplateDrivenFormComponent implements OnInit {
  countryList: any[] = [
    {
      id: 1,
      name: 'India',
    },
    {
      id: 2,
      name: 'US',
    },
    {
      id: 3,
      name: 'Australia',
    },
    {
      id: 14,
      name: 'England',
    },
  ];
  stateList: string[] = ['Gujarat', 'Rajasthan', 'Maharastra', 'Kerala'];
  userData: User = new User();
  validationEnabled = true;

  constructor(
    private commonService: CommonService,
    private router: Router,
  ) { }

  reloadComponent() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/training/template-driven-forms']);
    });
  }

  ngOnInit(): void {
    this.setBreadCrumb();

    // If we will have data to assign in the form then assign the data using below code
    this.userData.firstname = 'Atul';
    this.userData.lastname = 'Agrawal';
  }

  /**
   * Set breadCrumbData in CommonService
   */
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Template Driven Forms',
      linkList: [
        {
          label: 'Dashboard',
          link: '/'
        },
        {
          label: 'Template Driven Forms',
          link: ''
        },
      ]
    });
  }

  saveUserData(form: NgForm) {
    console.log(`form :>> `, form);
    if (!this.validationEnabled || (this.validationEnabled && form.valid)) {
      alert('form is ready to submit...');
      this.resetForm(form);
    }
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }

}