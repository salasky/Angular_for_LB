import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/servicesCompany/company.service';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  company:Company={
    companyName:'',
    physicalAddress:'',
    legalAddress:'',
    supervisor:''
  };
  submitted = false;

  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
  }



  saveCompany(): void{
    const data = {
      companyName: this.company.companyName,
      physicalAddress: this.company.physicalAddress,
      legalAddress:this.company.legalAddress,
      supervisor: this.company.supervisor
    };

    this.companyService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newCompany(): void {
    this.submitted = false;
    this.company = {
      companyName: '',
      physicalAddress: '',
      legalAddress: '',
      supervisor: '',
    };
  }
}
