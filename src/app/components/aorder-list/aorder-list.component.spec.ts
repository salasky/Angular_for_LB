import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOrderListComponent } from './aorder-list.component';

describe('AOrderListComponent', () => {
  let component: AOrderListComponent;
  let fixture: ComponentFixture<AOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
