import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellersPage } from './sellers.page';
import { SellerResolverService } from '../../resolvers/seller-resolver';
import { StateResolverService } from '../../resolvers/states-resolver';
import { PropertyOpsResolverService } from '../../resolvers/propertie-ops-resolver';
import { PropertyTypeResolverService } from '../../resolvers/propertie-type-resolver';
import { PropertieResolverService } from 'src/app/resolvers/propertie-resolver';

const routes: Routes = [
  {
    path: '',
    component: SellersPage
  },
  {
    path: 'info/:id',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule),
    resolve: { seller: SellerResolverService }
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'property/:sellerId/:id',
    loadChildren: () => import('./property/property.module').then( m => m.PropertyPageModule),
    resolve: { 
      states: StateResolverService,
      operation_types: PropertyOpsResolverService,
      types: PropertyTypeResolverService,
      propertie: PropertieResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellersPageRoutingModule {}
