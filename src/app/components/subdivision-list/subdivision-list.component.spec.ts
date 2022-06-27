import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdivisionListComponent } from './subdivision-list.component';

describe('SubdivisionListComponent', () => {
  let component: SubdivisionListComponent;
  let fixture: ComponentFixture<SubdivisionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdivisionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdivisionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
