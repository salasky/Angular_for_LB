import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOrderDetailsComponent } from './aorder-details.component';

describe('AOrderDetailsComponent', () => {
  let component: AOrderDetailsComponent;
  let fixture: ComponentFixture<AOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
