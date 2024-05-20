import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }
  getOrders() {
    return this.http.get("https://localhost:7184/api/Order?page=1", this.userToken())
  }
  userToken() {
    return {
      headers: { Authorization: "Bearer " + JSON.parse(localStorage.getItem('token') || "") },
    }
  }
  accept(id: any) {
    return this.http.put("https://localhost:7184/api/Order", {
      "orderId": id,
      "status": Status.approved


    }, this.userToken())

  }
  reject(id: any) {
    return this.http.put("https://localhost:7184/api/Order", {
      "orderId": id,
      "status": Status.rejected

    }, this.userToken())
  }
}
enum Status {
  requested = 1,
  approved = 2,
  rejected = 3
}
