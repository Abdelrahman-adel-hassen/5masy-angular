import { NgModule } from '@angular/core';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../Shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrdersComponent } from './orders/orders.component';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [ ProductDetailsComponent, OrdersComponent,ConfirmationComponent],
  imports: [
    ShopRoutingModule,
    SharedModule,
    RouterModule,
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    FontAwesomeModule,
  ]
})
export class ShopModule { }
