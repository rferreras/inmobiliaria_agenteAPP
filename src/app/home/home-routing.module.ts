import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'buyers',
    loadChildren: () => import('./buyers/buyers.module').then( m => m.BuyersPageModule)
  },
  {
    path: 'sellers',
    loadChildren: () => import('./sellers/sellers.module').then( m => m.SellersPageModule)
  },
  {
    path: 'properties',
    loadChildren: () => import('./properties/properties.module').then( m => m.PropertiesPageModule)
  },
  {
    path: 'opportunities',
    loadChildren: () => import('./opportunities/opportunities.module').then( m => m.OpportunitiesPageModule)
  },
  {
    path: 'my-info',
    loadChildren: () => import('./my-info/my-info.module').then( m => m.MyInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
