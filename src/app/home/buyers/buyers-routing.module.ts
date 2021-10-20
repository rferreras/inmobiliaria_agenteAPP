import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyersPage } from './buyers.page';

const routes: Routes = [
  {
    path: '',
    component: BuyersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyersPageRoutingModule {}
