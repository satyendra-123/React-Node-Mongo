import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCcComponent } from './checkout-cc.component';

describe('CheckoutCcComponent', () => {
  let component: CheckoutCcComponent;
  let fixture: ComponentFixture<CheckoutCcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
