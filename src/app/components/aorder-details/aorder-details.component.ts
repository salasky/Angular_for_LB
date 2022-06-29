import {Component, Input, OnInit} from '@angular/core';
import {AOrder} from "../../models/aorder.model";
import {AOrderService} from "../../services/aorder.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-aorder-details',
  templateUrl: './aorder-details.component.html',
  styleUrls: ['./aorder-details.component.css']
})
export class AOrderDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentOrder: AOrder = {
    subject: '',
    periodExecution: '',
    signControl: '',
    orderText: '',
    execEmployeeUsername: '',
    state:''
  };
  submitted = false;
  isaccept = false;
  isrevision = false;
  isupdate = false;
  isdelete = false;
  errorMessage = '';
  message = '';
  constructor(
    private aOrderService: AOrderService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getOrder(this.route.snapshot.params["id"]);
    }
  }
  getOrder(id: string): void {
    this.aOrderService.get(id)
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

  updateOrder(): void {
    this.message = '';
    this.aOrderService.update(this.currentOrder.id, this.currentOrder)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.isupdate = false;
          this.message = res.message ? res.message : 'This order was updated successfully!';
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isupdate = true;
        }
      });
  }
  deleteOrder(): void {
    this.aOrderService.delete(this.currentOrder.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This order was delete successfully!';
          this.submitted = true;
          this.isdelete = false;
          this.router.navigate(['/aorders']);
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isdelete = true;
        }
      });
  }


  accept(): void {
    this.message = '';
    this.aOrderService.accept(this.currentOrder.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.isaccept = false;
          this.message = res.message ? res.message : 'This order was accept successfully!';
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isaccept = true;
        }
      });
  }

  revision(): void {
    this.message = '';
    this.aOrderService.revision(this.currentOrder.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.isrevision = false;
          this.message = res.message ? res.message : 'This order was revision successfully!';
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isrevision = true;
        }
      });
  }

}


