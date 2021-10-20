import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnMenuComponent } from './btn-menu/btn-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    BtnMenuComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    BtnMenuComponent
  ]
})
export class ComponentsModule { }
