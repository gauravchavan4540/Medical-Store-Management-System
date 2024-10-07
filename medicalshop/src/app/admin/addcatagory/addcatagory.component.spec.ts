import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcatagoryComponent } from './addcatagory.component';

describe('AddcatagoryComponent', () => {
  let component: AddcatagoryComponent;
  let fixture: ComponentFixture<AddcatagoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcatagoryComponent]
    });
    fixture = TestBed.createComponent(AddcatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
