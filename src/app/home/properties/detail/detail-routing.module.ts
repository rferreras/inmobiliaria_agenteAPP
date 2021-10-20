import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPage } from './detail.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPage ,
    children: [
      {
        path: 'info',
        loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
      },
      {
        path: 'images',
        loadChildren: () => import('./images/images.module').then( m => m.ImagesPageModule)
      },
      {
        path: 'docs',
        loadChildren: () => import('./docs/docs.module').then( m => m.DocsPageModule)
      },
      {
        path: 'comments',
        loadChildren: () => import('./comments/comments.module').then( m => m.CommentsPageModule)
      }, {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      }
    ]   
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPageRoutingModule {}
