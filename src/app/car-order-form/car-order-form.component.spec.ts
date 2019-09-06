import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOrderFormComponent } from './car-order-form.component';

describe('CarOrderFormComponent', () => {
  let component: CarOrderFormComponent;
  let fixture: ComponentFixture<CarOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
