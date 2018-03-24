import {Router, Route} from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DeliveryComponent } from './components/delivery/delivery.component';

export const ROUTES :Route[] = [
    {
        path:'', redirectTo:'/app-home', pathMatch:'full'
    },
    {
        path:'app-home', component: HomeComponent
    }  
]