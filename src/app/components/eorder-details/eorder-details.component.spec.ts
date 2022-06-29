import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOrderDetailsComponent } from './eorder-details.component';

describe('EOrderDetailsComponent', () => {
  let component: EOrderDetailsComponent;
  let fixture: ComponentFixture<EOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
