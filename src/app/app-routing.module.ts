import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { DateTimeComponent } from './Shared/components/date-time/date-time.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumb: 'Home'}},
  {
    path: 'confirm', loadChildren: () => import('./Shop/shop.module').then(mod => mod.ShopModule),
  },

  {
    path: 'Shop', loadChildren: () => import('./Shop/shop.module').then(mod => mod.ShopModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
