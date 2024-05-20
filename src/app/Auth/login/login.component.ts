import { Component, inject } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { FormsModule } from '@angular/forms';
import { AuthService } from '../authServices/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [RegisterComponent, FormsModule]
})
export class LoginComponent {
  email = "";
  password = "";
  auth = inject(AuthService)
  login() {
    this.auth.login({ email: this.email, password: this.password })
      .subscribe((res: any) => {
        localStorage.setItem("token", JSON.stringify(res.token))
      })

  }
}
