import { Component, OnInit } from '@angular/core';
import {AOrder} from "../../models/aorder.model";
import {AOrderService} from "../../services/aorder.service";

@Component({
  selector: 'app-aorder-list',
  templateUrl: './aorder-list.component.html',
  styleUrls: ['./aorder-list.component.css']
})
export class AOrderListComponent implements OnInit {

  orders?: AOrder[];
  currentOrder: AOrder = {};
  currentIndex = -1;
  subject = '';
  constructor(private aOrderService: AOrderService) { }
  ngOnInit(): void {
    this.retrieveOrders();

  }
  retrieveOrders(): void {
    this.aOrderService.getAuthorOrder()
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

  searchSubject(): void {
    this.currentOrder = {};
    this.currentIndex = -1;
    this.aOrderService.findBySubject(this.subject)
      .subscribe({
        next: (data) => {
          this.orders = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  setActiveOrders(order: AOrder, index: number): void {
    this.currentOrder = order;
    this.currentIndex = index;
  }


}
