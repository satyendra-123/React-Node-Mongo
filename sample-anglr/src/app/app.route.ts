import {Router, Route} from '@angular/router'
import { HomeComponent } from './components/home/home.component';

export const ROUTES :Route[] = [
    {
        path:'', redirectTo:'/app-home', pathMatch:'full'
    },
    {
        path:'app-home', component: HomeComponent
    },
]