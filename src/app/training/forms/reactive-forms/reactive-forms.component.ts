import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { VALIDATION_PATTERN } from "src/app/shared/constants/app.constants";
import { getMonthAndYear } from "src/app/shared/functions/date-functions";
import { CommonService } from "src/app/shared/services/common.service";
import { UsernameValidator } from "src/app/shared/services/validations";

@Component({
  selector: "wcg-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.scss"],
})
export class ReactiveFormsComponent implements OnInit {
  countryList: string[] = ["India", "US", "Australia", "England"];

  submitted: boolean = false;
  userForm = new FormGroup({
    firstname: new FormControl("", [
      Validators.required,
      UsernameValidator.cannotContainSpace,
    ]),
    lastname: new FormControl("", [
      Validators.required,
      UsernameValidator.cannotContainSpace,
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(VALIDATION_PATTERN.EMAIL),
    ]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern(VALIDATION_PATTERN.WHOLE_NUMBER),
    ]),
    country: new FormControl("", [Validators.required]),
    birthDate: new FormControl("", [Validators.required]),
  });

  userList: any[] = [];
  currentDate = new Date();
  maxDate = new Date(this.currentDate.getFullYear() - 18, this.currentDate.getMonth(), this.currentDate.getDate());

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.setBreadCrumb();

    // If we will have data to assign in the form then assign the data using below code
    this.userForm.patchValue({
      firstname: 'Bhargavi',
      lastname: 'Chitroda',
      email: 'bhargavi@Webcodegenie.Com',
      phone: '9876543210',
      country: 'India',
      birthDate: new Date('Dec 01 2002').toISOString()
    });
  }

  /**
   * Set breadCrumbData in CommonService
   */
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: "Reactive Forms",
      linkList: [
        {
          label: "Dashboard",
          link: "/",
        },
        {
          label: "Reactive Forms",
          link: "",
        },
      ],
    });
  }

  /**
   * Save User Data
   */
  saveUserData() {
    this.submitted = true;
    if (this.userForm.valid) {
      this.userList.push(this.userForm.value);
      this.resetForm();
    }
  }

  /**
   * Reset Form
   */
  resetForm() {
    this.submitted = false;
    this.userForm.reset();
  }

  /**
   * Delete User
   * @param index
   */
  deleteUser(index: any) {
    this.userList.splice(index, 1);
  }

  monthHandler(normlizedMonth: any, datepicker: any) {
    const {year, month} = getMonthAndYear(normlizedMonth, datepicker)
    const newDate = new Date(year, month-1, 1);
    this.userForm.controls.birthDate.setValue(newDate.toISOString());
  }
}
