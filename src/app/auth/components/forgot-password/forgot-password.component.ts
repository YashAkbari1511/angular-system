import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'wcg-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent  {
  forgotPasswordForm: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
  });
  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  /**
   * Vallidate the form and continue with forgot password proces
   */
  doForgotPassword() {
    this.formSubmitted = true;
    if (this.forgotPasswordForm.valid) {
    } else {
      this.formSubmitted = false;
    }
  }

}