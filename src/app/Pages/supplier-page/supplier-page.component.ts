import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-supplier-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './supplier-page.component.html',
  styleUrl: './supplier-page.component.css'
})
export class SupplierPageComponent {
  orders: any;
  constructor(private api: ApiService) {
  }
  ngOnInit(): void {
    this.getOrders();
  }
  currentId: any;
  getOrders(){
    this.api.getOrders().subscribe((res: any) => {
      this.orders = res.data

    })
  }
  openToggler(id: any) {
    if (this.currentId == id) {
      this.currentId = 0
    } else {
      this.currentId = id
    }
  }
  accept(id: any) {
    this.api.accept(id).subscribe(res => this.getOrders())


  }
  reject(id: any) {
    this.api.reject(id).subscribe(res => this.getOrders())
  }
}
