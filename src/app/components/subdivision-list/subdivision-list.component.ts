import { Component, OnInit } from '@angular/core';
import {Subdisision} from "../../models/subdisision.model";
import {SubdivisionService} from "../../services/subdivision.service";

@Component({
  selector: 'app-subdivision-list',
  templateUrl: './subdivision-list.component.html',
  styleUrls: ['./subdivision-list.component.css']
})
export class SubdivisionListComponent implements OnInit {

  subdisisions?: Subdisision[];
  currentSubdisision: Subdisision = {};
  currentIndex = -1;
  name = '';
  constructor(private subdivisionService: SubdivisionService) { }
  ngOnInit(): void {
    this.retrieveSubdivisions();
  }
  retrieveSubdivisions(): void {
    this.subdivisionService.getAll()
      .subscribe({
        next: (data) => {
          this.subdisisions = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveSubdivisions();
    this.currentSubdisision = {};
    this.currentIndex = -1;
  }

  setActiveSubdivisions(subdisision: Subdisision, index: number): void {
    this.currentSubdisision = subdisision;
    this.currentIndex = index;
  }

}
