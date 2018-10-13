import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDcComponent } from './checkout-dc.component';

describe('CheckoutDcComponent', () => {
  let component: CheckoutDcComponent;
  let fixture: ComponentFixture<CheckoutDcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutDcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
