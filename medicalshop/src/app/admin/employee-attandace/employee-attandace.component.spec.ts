import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAttandaceComponent } from './employee-attandace.component';

describe('EmployeeAttandaceComponent', () => {
  let component: EmployeeAttandaceComponent;
  let fixture: ComponentFixture<EmployeeAttandaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAttandaceComponent]
    });
    fixture = TestBed.createComponent(EmployeeAttandaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
