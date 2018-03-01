import { CommonModule } from '@angular/common';
import { BackendService } from './../services/backend.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [BackendService]
  })

export class HomeModule{

}