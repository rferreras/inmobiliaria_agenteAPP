import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerResolverService } from 'src/app/resolvers/buyer-resolver';

import { BuyersPage } from './buyers.page';

const routes: Routes = [
  {
    path: '',
    component: BuyersPage
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule),
    resolve: { buyer: BuyerResolverService }
  },
  {
    path: 'info/:id',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule),
    resolve: { buyer: BuyerResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyersPageRoutingModule {}
