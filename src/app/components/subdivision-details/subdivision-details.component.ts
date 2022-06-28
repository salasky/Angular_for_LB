import {Component, Input, OnInit} from '@angular/core';
import {Subdisision} from "../../models/subdisision.model";
import {SubdivisionService} from "../../services/subdivision.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Company} from "../../models/company.model";

@Component({
  selector: 'app-subdivision-details',
  templateUrl: './subdivision-details.component.html',
  styleUrls: ['./subdivision-details.component.css']
})
export class SubdivisionDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentSubdivision: Subdisision = {
    name: '',
    contact: '',
    supervisor: '',
    companyName: '',

  };
  isSuccessful = false;
  isEditFailed = false;
  errorMessage = '';
  message = '';
  constructor(
    private subdivisionService: SubdivisionService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getSubdivision(this.route.snapshot.params["id"]);
    }
  }
  getSubdivision(id: string): void {
    this.subdivisionService.get(id)
      .subscribe({
        next: (data) => {
          this.currentSubdivision = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  updateSubdivision(): void {
    this.message = '';
    this.subdivisionService.update(this.currentSubdivision.id, this.currentSubdivision)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.isSuccessful = true;
          this.isEditFailed = false;
          this.message = res.message ? res.message : 'This subdivision was updated successfully!';
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isEditFailed = true;
        }
      });
  }
  deleteSubdivision(): void {
    this.subdivisionService.delete(this.currentSubdivision.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/subdivisions']);
        },
        error: (e) => console.error(e)
      });
  }
}
