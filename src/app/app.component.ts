import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./Auth/login/login.component";
import { RegisterComponent } from "./Auth/register/register.component";
import { ProductsComponent } from "./Pages/products/products.component";
import { CartComponent } from "./Pages/cart/cart.component";
import { SupplierPageComponent } from "./Pages/supplier-page/supplier-page.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, RegisterComponent, ProductsComponent, CartComponent, SupplierPageComponent]
})
export class AppComponent {
  title = 'KlickIt';
}
