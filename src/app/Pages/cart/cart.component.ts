import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  api = inject(ApiService);
  cartData: any[] = [];

  // getCartData() {
  //   this.api.getCartContent().subscribe((res: any) => {
  //     this.cartData = res.data;
  //   });
  // }
}
