import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardpagePageRoutingModule } from './dashboardpage-routing.module';

import { DashboardpagePage } from './dashboardpage.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardpagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DashboardpagePage]
})
export class DashboardpagePageModule {}
