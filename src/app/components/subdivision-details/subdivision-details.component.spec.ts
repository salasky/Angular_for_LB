import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdivisionDetailsComponent } from './subdivision-details.component';

describe('SubdivisionDetailsComponent', () => {
  let component: SubdivisionDetailsComponent;
  let fixture: ComponentFixture<SubdivisionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdivisionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdivisionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
