import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../../../shared/services/auth.service';
import { AlertMessageService } from 'src/app/shared/components/alert-message/alert-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wcg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
  });
  formSubmitted: boolean = false;
  subscriptions$!: Subscription;

  constructor(
    private authService: AuthService,
    private alertMessageService: AlertMessageService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    if (this.authService.getAuthToken()) {
      this.router.navigate(['/']);
    }
  }

  // unsubscribe to avoid memory leak issue
  ngOnDestroy(): void {
    if (this.subscriptions$) {
      this.subscriptions$.unsubscribe();
    }
  }

  /**
   * Checks the form data is valid or not.. If valid, do the api call
   * If we get success response then redirect user to dashboard page otherwise display error message
   */
  doLogin() {
    if (this.loginForm.valid) {
      this.formSubmitted = true;
      const loginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.subscriptions$ = this.authService.login(loginData).subscribe({
        next: (loginResponse: any) => {
          if (loginResponse?.status === 200 && loginResponse?.data?.token) {
            this.authService.setAuthToken(loginResponse.data.token);
            this.router.navigate(['/dashboard'])
          } else if (loginResponse?.status == 401 && loginResponse?.message) {
            this.alertMessageService.error(loginResponse.message);
          }
        },
        error: () => {
          this.formSubmitted = false;
        },
        complete: () => {
          this.formSubmitted = false;
        }
      });
    }
  }
}
