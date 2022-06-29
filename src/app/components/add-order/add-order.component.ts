import { Component, OnInit } from '@angular/core';
import {AOrder} from "../../models/aorder.model";
import {AOrderService} from "../../services/aorder.service";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  order: AOrder = {
    subject: '',
    periodExecution: '',
    signControl: '',
    orderText: '',
    execEmployeeUsername: ''
  };
  submitted = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private orderService: AOrderService) { }
  ngOnInit(): void {
  }
  saveOrder(): void {
    const data = {
      subject: this.order.subject,
      periodExecution: this.order.periodExecution,
      signControl: this.order.signControl,
      orderText: this.order.orderText,
      execEmployeeUsername: this.order.execEmployeeUsername

    };
    this.orderService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.isSignUpFailed = false;

        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
  }
  newOrder(): void {
    this.submitted = false;
    this.order = {
      subject: '',
      periodExecution: '',
      signControl: '',
      orderText: '',
      execEmployeeUsername: ''
    };
  }
}
