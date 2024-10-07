import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandaceComponent } from './attandace.component';

describe('AttandaceComponent', () => {
  let component: AttandaceComponent;
  let fixture: ComponentFixture<AttandaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttandaceComponent]
    });
    fixture = TestBed.createComponent(AttandaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
