import { Component, OnInit } from '@angular/core';
import {Subdisision} from "../../models/subdisision.model";
import {Company} from "../../models/company.model";
import {SubdivisionService} from "../../services/subdivision.service";

@Component({
  selector: 'app-add-subdisision',
  templateUrl: './add-subdisision.component.html',
  styleUrls: ['./add-subdisision.component.css']
})
export class AddSubdisisionComponent implements OnInit {
      subdivision: Subdisision = {
      name: '',
      contact: '',
      supervisor: '',
        companyName:'',

      company:new Company(),

  };

  submitted = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private subdivisionService: SubdivisionService) { }
  ngOnInit(): void {
  }
  saveSubdivision(): void {
    const data = {
      name: this.subdivision.name,
      contact: this.subdivision.contact,
      supervisor: this.subdivision.supervisor,
      companyName:this.subdivision.companyName
    };

    this.subdivisionService.create(data)
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
  newSubdivision(): void {
    this.submitted = false;
    this.subdivision = {
      name: '',
      contact: '',
      supervisor: '',
      companyName: ''
    };
  }

}
