import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'wcg-header',
  templateUrl: './header.component.html',
  styles: [`
  ::ng-deep .mat-mdc-menu-item .mdc-list-item__primary-text{
    font-size: 15px !important; font-weight: 300 !important; 
  }`]
})
export class HeaderComponent {
  userData = this.authService.getAuthUserData();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * Logout the user from the system by removing COOKIE and redirect to login page
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
