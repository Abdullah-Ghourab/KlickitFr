import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAdmin) {
    if (localStorage.getItem('token')) {
      router.navigate(['/orders']);
      return true;
    } else {
      return false;
    }
  } else {
    if (localStorage.getItem('token')) {
      router.navigate(['/home']);
      return true;
    } else {
      return false;
    }
  }
};
