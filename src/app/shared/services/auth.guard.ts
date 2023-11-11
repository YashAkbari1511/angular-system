import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

export const AuthGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (!authService.isAuthTokenValid()) {
    router.navigate(['/auth/login']);
    return false;
  }
  return true;
}