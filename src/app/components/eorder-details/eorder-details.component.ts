import {Component, Input, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {EOrder} from "../../models/eorder.model";
import {EOrderService} from "../../services/eorder.service";

@Component({
  selector: 'app-eorder-details',
  templateUrl: './eorder-details.component.html',
  styleUrls: ['./eorder-details.component.css']
})
export class EOrderDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentOrder: EOrder = {
    subject: '',
    periodExecution: '',
    signControl: '',
    orderText: '',
    authorEmployeeUsername: '',
    state:''
  };
  submitted = false;
  isperform = false;
  iscontrol = false;
  isseconcontrol = false;
  errorMessage = '';
  message = '';
  constructor(
    private eOrderService: EOrderService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getOrder(this.route.snapshot.params["id"]);
    }
  }
  getOrder(id: string): void {
    this.eOrderService.get(id)
      .subscribe({
        next: (data) => {
          this.currentOrder = data;
          console.log(data);
        },
        error: err => {
          this.errorMessage = err.error.message;
        }
      });
  }




  perform(): void {
    this.message = '';
    this.eOrderService.perform(this.currentOrder.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.isperform = false;
          this.message = res.message ? res.message : 'This order was performance successfully!';
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isperform = true;
        }
      });
  }

  control(): void {
    this.message = '';
    this.eOrderService.control(this.currentOrder.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.iscontrol = false;
          this.message = res.message ? res.message : 'This order was control successfully!';
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.iscontrol = true;
        }
      });
  }
  seconperform(): void {
    this.message = '';
    this.eOrderService.secondperform(this.currentOrder.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.isseconcontrol = false;
          this.message = res.message ? res.message : 'This order was control successfully!';
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isseconcontrol = true;
        }
      });
  }
}
