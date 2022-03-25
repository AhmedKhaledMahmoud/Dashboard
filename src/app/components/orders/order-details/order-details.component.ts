import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orders: any[];

  currentId: number;
  currentOrder: any | null;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private location: Location
  ) {}

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((arg) => {
      this.currentId = Number(arg.get('id'));
      this.ordersService.getOrderById(this.currentId).subscribe((order)=>{this.currentOrder = order});
    });
  }

  goBack() {
    this.location.back();
  }

}
