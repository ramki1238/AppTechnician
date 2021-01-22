import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemdetailPageRoutingModule } from './itemdetail-routing.module';

import { ItemdetailPage } from './itemdetail.page';
import { ModelsModule } from 'src/app/models/models.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemdetailPageRoutingModule,
    ModelsModule
  ],
  declarations: [ItemdetailPage]
})
export class ItemdetailPageModule {}
