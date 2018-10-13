import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutNetComponent } from './checkout-net.component';

describe('CheckoutNetComponent', () => {
  let component: CheckoutNetComponent;
  let fixture: ComponentFixture<CheckoutNetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutNetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
