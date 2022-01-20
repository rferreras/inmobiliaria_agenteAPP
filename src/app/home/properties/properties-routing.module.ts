import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertiesPage } from './properties.page';
import { PropertieResolverService } from '../../resolvers/propertie-resolver';
import { StateResolverService } from '../../resolvers/states-resolver';
import { PropertyOpsResolverService } from '../../resolvers/propertie-ops-resolver';
import { PropertyTypeResolverService } from '../../resolvers/propertie-type-resolver';
import { AreasResolverService } from '../../resolvers/areas-resolver';

const routes: Routes = [
  {
    path: '',
    component: PropertiesPage
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule),
    resolve: { propertie: PropertieResolverService }
  },
  {
    path: 'filters',
    loadChildren: () => import('./filters/filters.module').then( m => m.FiltersPageModule),
    resolve: {
      states: StateResolverService,
      operation_types: PropertyOpsResolverService,
      types: PropertyTypeResolverService,
      areas: AreasResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertiesPageRoutingModule {}
