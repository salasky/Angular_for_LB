import {Component, Input, OnInit} from '@angular/core';
import {Company} from "../../models/company.model";
import {CompanyService} from "../../servicesCompany/company.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentCompany: Company = {
    companyName: '',
    physicalAddress: '',
    legalAddress: '',
    supervisor: '',
  };

  message = '';
  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCompany(this.route.snapshot.params["id"]);
    }
  }


  getCompany(id: string): void {
    this.companyService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCompany = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateCompany(): void {
    this.message = '';
    this.companyService.update(this.currentCompany.id, this.currentCompany)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteCompany(): void {
    this.companyService.delete(this.currentCompany.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/mod/company']);
        },
        error: (e) => console.error(e)
      });
  }
}
