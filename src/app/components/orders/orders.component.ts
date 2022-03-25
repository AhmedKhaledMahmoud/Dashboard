import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any[];
  constructor(private ordersService: OrdersService,
    private router: Router) { }

  ngOnInit(): void {
    this.ordersService
      .getAllProducts()
      .subscribe((orders) => (this.orders = orders));
  }

  openOrderDetails(orderID: number) {
    this.router.navigate(['/orders', orderID]);
  }

}
