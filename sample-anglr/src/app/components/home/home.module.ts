import { PaymentComponent } from './../checkout/payment/payment.component';
import { ROUTES } from './../../app.route';
import { CommonModule } from '@angular/common';
import { BackendService } from './../services/backend.service';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeliveryComponent } from '../delivery/delivery.component';
import { OrderReviewComponent } from '../checkout/order-review/order-review.component';
import { AddressManageComponent } from '../checkout/address-manage/address-manage.component';
import { DataShareSvc } from '../services/DataShareSvc';
import { NewAddressComponent } from '../checkout/address-manage/new-address/new-address.component';
import { EditAddressComponent } from '../checkout/address-manage/edit-address/edit-address.component';

@NgModule({
    declarations: [
      HomeComponent,
      CheckoutComponent,
      OrderReviewComponent,
      AddressManageComponent,
      PaymentComponent,
      DeliveryComponent,   
      NewAddressComponent,
      EditAddressComponent 
    ],
    imports: [
      CommonModule, ReactiveFormsModule, FormsModule, RouterModule, RouterModule.forRoot(ROUTES, { useHash: true})
    ],
    exports: [RouterModule],
    providers: [BackendService, DataShareSvc]
  })

export class HomeModule{

}