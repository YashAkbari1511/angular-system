import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { VALIDATION_PATTERN } from 'src/app/shared/constants/app.constants';
import { UserService } from 'src/app/shared/services/user.service';
import { isStrongPassword, matchValidator, UsernameValidator } from 'src/app/shared/services/validations';

@Component({
  selector: 'wcg-user-manage-modal',
  templateUrl: './user-manage-modal.component.html',
  styles: [`
    .dialogheader {padding: 0px 10px; background-color: rgb(120 130 140 / 13%);}
    ::ng-deep .mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-form-field-infix  {  min-height: 40px !important ; padding: 10px 0 0 0  !important;} 
    ::ng-deep  .mat-mdc-form-field-icon-suffix>.mat-icon {padding : 10px !important}
    ::ng-deep .ng-select .ng-select-container{border: none !important ;border-bottom :0.2px solid #9b9b9b !important;border-radius:0px}
  `],
})
export class UserManageModalComponent implements OnInit, OnDestroy {
  subscribtions$: Subscription[] = [];
  userId: any;
  fetchingData: boolean = true;
  submitted: boolean = false;
  isLoading: boolean = false;

  checkEmail: boolean = false;
  confirmPassword: string = "password";
  password: string = "password";
  visibilityPassword: string = "visibility_off";
  visibilityConfirmPassword: string = "visibility_off";

  usersStateList: any = [
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
  ];
  usersRoleList: any = [
    { _id: '637f1b7ca130e959b370db55', name: 'Webflow Manager', },
    { _id: '638751880308ffab6e48dc52', name: 'Ad Role', }
  ];
  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, UsernameValidator.cannotContainSpace]),
    lastName: new FormControl('', [Validators.required, UsernameValidator.cannotContainSpace]),
    mobile: new FormControl('', [Validators.required, Validators.pattern(VALIDATION_PATTERN.WHOLE_NUMBER)]),
    email: new FormControl('', [Validators.required, Validators.pattern(VALIDATION_PATTERN.EMAIL)]),
    state: new FormControl([], [Validators.required]),
    city: new FormControl('', [Validators.required, Validators.pattern(VALIDATION_PATTERN.ONLY_ALPHABETS)]),
    zipCode: new FormControl('', [Validators.required, Validators.pattern(VALIDATION_PATTERN.WHOLE_NUMBER)]),
    address: new FormControl('', [Validators.required]),
    roleId: new FormControl([], [Validators.required]),
    password: new FormControl(null, [Validators.required, isStrongPassword()]),
    confirmPassword: new FormControl(null, [Validators.required]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<any>,
    private userservice: UserService,
    private cd: ChangeDetectorRef
  ) { }

  // unsubscribe to avoid memory leak issue
  ngOnDestroy(): void {
    this.subscribtions$.forEach(subscriber => {
      subscriber.unsubscribe();
    });
  }

  ngOnInit(): void {
    this.userId = this.data.userId;
    this.userForm.reset();
    this.userDetails();
    if (this.userId) {
      this.userForm.controls['email'].disable();
      this.userForm.controls['email'].clearValidators();

      this.userForm.controls['password'].disable();
      this.userForm.controls['password'].clearValidators();

      this.userForm.controls['confirmPassword'].disable();
      this.userForm.controls['confirmPassword'].clearValidators();
    } else {
      this.userForm.addValidators(
        matchValidator(this.userForm.get('password'), this.userForm.get('confirmPassword'))
      );
    }
  }

  /*
  * Check the entered email exists in database or not
  * If exists, display the error message
  */
  checkMail() {
    let checkEmailObj: any = {
      email: this.userForm.controls['email'].value,
    }
    if (this.userId) {
      checkEmailObj['id'] = this.userId;
    }

    const subscriptionEmailCheck = this.userservice.checkDuplicateEmail(checkEmailObj).subscribe((response: any) => {
      this.checkEmail = response?.data?.exists || false;
    });
    this.subscribtions$.push(subscriptionEmailCheck);
  }

  /*
  * Change the visibility of password field
  */
  changeVisibility(field: string) {
    if (field === 'password') {
      if (this.visibilityPassword == 'visibility_off') {
        this.visibilityPassword = 'visibility';
        this.password = 'text';
      } else {
        this.visibilityPassword = 'visibility_off';
        this.password = 'password';
      }
    } else {
      if (this.visibilityConfirmPassword == 'visibility_off') {
        this.visibilityConfirmPassword = 'visibility';
        this.confirmPassword = 'text';
      } else {
        this.visibilityConfirmPassword = 'visibility_off';
        this.confirmPassword = 'password';
      }
    }
  }

  /*
  * Check if form data is valid and check email is not duplicate.
  * If we have useId means update user otherwise add user
  * If form data saved successfully then close the modal
  */
  submitUserData() {
    this.submitted = true;
    if (this.userForm.valid && !this.checkEmail) {
      this.isLoading = true;
      const apiCall = (this.userId) ? this.userservice.update(this.userForm.value, this.userId) : this.userservice.create(this.userForm.value);
      const subscriptionSaveUser = apiCall.subscribe({
        next: (response: any) => {
          this.isLoading = false;
          this.dialogRef.close(true);
        },
        error: (error: any) => {
          this.isLoading = false;
        }
      });
      this.subscribtions$.push(subscriptionSaveUser);
    }
  }
  closeManageUserModal() {
    this.dialogRef.close(false)
  }

  /*
  * Call user details API.
  * patch that user detail data into form.
  */
  userDetails() {
    this.fetchingData = true;
    if (this.userId) {
      const subscriptionUserDetail = this.userservice.userDetail(this.userId).subscribe({
        next: (response: any) => {
          this.userForm.patchValue(response.data);
          this.fetchingData = false;
          this.cd.detectChanges();
        },
        error: (error: any) => {
          this.fetchingData = false;
          this.cd.detectChanges();
        },
      })
      this.subscribtions$.push(subscriptionUserDetail);
    } else {
      this.fetchingData = false;
      this.cd.detectChanges();
    }
  }
}
