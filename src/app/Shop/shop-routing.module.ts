import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  {path: '', component: OrdersComponent},
  {path: 'confirm', component:ConfirmationComponent},
  {path: ':id', component: ProductDetailsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ShopRoutingModule { }
