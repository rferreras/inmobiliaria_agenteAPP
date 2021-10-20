import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertiesPage } from './properties.page';
import { PropertieResolverService } from '../../resolvers/propertie-resolver';

const routes: Routes = [
  {
    path: '',
    component: PropertiesPage
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule),
    resolve: { propertie: PropertieResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertiesPageRoutingModule {}
