import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'defer',
    loadComponent: () => import("./pages/defer/defer.page").then(c => c.DeferPage),
  },
  {
    path: 'checkout',
    loadComponent: () => import("./pages/checkout/checkout.page").then(c => c.CheckoutPage),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Angular17RoutingModule { }
