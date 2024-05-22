import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Auth/authServices/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  auth = inject(AuthService);
  router = inject(Router);

  logout() {
    localStorage.removeItem('token');
    this.auth.isLogged = false;
    this.auth.isAdmin = false;
    this.router.navigate(['/login']);
  }
}
