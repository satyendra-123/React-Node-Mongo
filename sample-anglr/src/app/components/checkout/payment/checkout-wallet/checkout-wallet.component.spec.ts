import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutWalletComponent } from './checkout-wallet.component';

describe('CheckoutWalletComponent', () => {
  let component: CheckoutWalletComponent;
  let fixture: ComponentFixture<CheckoutWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
