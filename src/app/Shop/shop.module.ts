import { NgModule } from '@angular/core';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../Shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrdersComponent } from './orders/orders.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';
import { PaymentComponent } from '../payment/payment.component';

@NgModule({
  declarations: [ ProductDetailsComponent, OrdersComponent,PaymentComponent],
  imports: [
    ShopRoutingModule,
    SharedModule,
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule
  ]
})
export class ShopModule { }
