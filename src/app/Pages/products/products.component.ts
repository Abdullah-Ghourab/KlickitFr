import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  api = inject(ApiService);
  products: any;
  ngOnInit(): void {

    this.api.getProducts().subscribe((res: any) => {
      this.products = res.data;
    })
  }
}
