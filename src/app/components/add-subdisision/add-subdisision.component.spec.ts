import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubdisisionComponent } from './add-subdisision.component';

describe('AddSubdisisionComponent', () => {
  let component: AddSubdisisionComponent;
  let fixture: ComponentFixture<AddSubdisisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubdisisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubdisisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
