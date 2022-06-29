import { Component, OnInit } from '@angular/core';
import {EOrder} from "../../models/eorder.model";
import {EOrderService} from "../../services/eorder.service";

@Component({
  selector: 'app-eorder-list',
  templateUrl: './eorder-list.component.html',
  styleUrls: ['./eorder-list.component.css']
})
export class EOrderListComponent implements OnInit {

  orders?: EOrder[];
  currentOrder: EOrder = {};
  currentIndex = -1;
  subject = '';
  constructor(private eOrderService: EOrderService) { }
  ngOnInit(): void {
    this.retrieveOrders();

  }
  retrieveOrders(): void {
    this.eOrderService.getExecOrder()
      .subscribe({
        next: (data) => {
          this.orders = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveOrders();
    this.currentOrder = {};
    this.currentIndex = -1;
  }


  setActiveOrders(order: EOrder, index: number): void {
    this.currentOrder = order;
    this.currentIndex = index;
  }


}
