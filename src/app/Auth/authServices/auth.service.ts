import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAdmin = false;
  isLogged = false;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token')) {
      this.isLogged = true;
    }
  }
  login(data: any) {
    return this.http.post('https://localhost:7184/api/auth/login', data);
  }
  register(data: any) {
    return this.http.post('https://localhost:7184/api/auth/register', data);
  }
}
