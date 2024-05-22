import { Component, inject } from '@angular/core';
import { AuthService } from '../authServices/auth.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  email = '';
  password = '';
  confirmPassword = '';
  auth = inject(AuthService);
  router = inject(Router);
  register() {
    if (this.password == this.confirmPassword) {
      this.auth
        .register({
          email: this.email,
          password: this.password,
          role: 'Shopper',
        })
        .subscribe((res: any) => {
          this.router.navigate(['/login']);
        });
    } else {
      window.alert("email and password don't match");
    }
  }
}
