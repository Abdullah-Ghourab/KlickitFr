import { Component, inject } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../authServices/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [RegisterComponent, FormsModule, RouterLink],
})
export class LoginComponent {
  email = '';
  password = '';
  auth = inject(AuthService);
  router = inject(Router);
  login() {
    this.auth
      .login({ email: this.email, password: this.password })
      .subscribe((res: any) => {
        localStorage.setItem('token', JSON.stringify(res.token));
        this.auth.isLogged = true;
        if (this.email == '') {
          this.auth.isAdmin = true;
          localStorage.setItem('isAdmin', JSON.stringify('true'));
        }
        if (this.auth.isAdmin) {
          this.router.navigate(['/offers']);
        } else {
          this.router.navigate(['/home']);
        }
      });
  }
}
