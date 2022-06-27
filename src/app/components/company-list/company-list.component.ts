
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/servicesCompany/company.service';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companys?: Company[];
  currentCompany: Company = {};
  currentIndex = -1;
  companyName = '';
  constructor(private companyService: CompanyService) { }
  ngOnInit(): void {
    this.retrieveCompanys();
  }
  retrieveCompanys(): void {
    this.companyService.getAll()
      .subscribe({
        next: (data) => {
          this.companys = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  setActiveTutorial(company: Company, index: number): void {
    this.currentCompany = company;
    this.currentIndex = index;
  }

}
