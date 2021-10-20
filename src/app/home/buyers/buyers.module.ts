import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyersPageRoutingModule } from './buyers-routing.module';

import { BuyersPage } from './buyers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyersPageRoutingModule
  ],
  declarations: [BuyersPage]
})
export class BuyersPageModule {}
