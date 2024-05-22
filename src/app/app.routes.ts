import { Routes } from '@angular/router';
import { CartComponent } from './Pages/cart/cart.component';
import { SupplierPageComponent } from './Pages/supplier-page/supplier-page.component';
import { ProductsComponent } from './Pages/products/products.component';
import { RegisterComponent } from './Auth/register/register.component';
import { authGuard } from './Auth/authServices/auth.guard';
import { LoginComponent } from './Auth/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: ProductsComponent, canActivate: [authGuard] },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  {
    path: 'orders',
    component: SupplierPageComponent,
    canActivate: [authGuard],
  },
  { path: 'register', component: RegisterComponent },
];
