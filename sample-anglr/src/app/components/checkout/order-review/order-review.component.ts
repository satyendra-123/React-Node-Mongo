import { DataShareSvc } from './../../services/DataShareSvc';
import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../model/sweets.model';

@Component({
  selector: 'order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css', './../checkout.component.css' ]
})
export class OrderReviewComponent implements OnInit {

  @Input()cartData : Cart;

  constructor( private dataShareSvc: DataShareSvc )  {
  }

  ngOnInit() {
    this.dataShareSvc.cart.subscribe(cartData => {
      this.cartData = cartData;
    })
    //once user clicks or default order-review will be loaded with all selected items from cart.
  }
}
