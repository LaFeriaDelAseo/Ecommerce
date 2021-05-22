import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DerechosyDeberesEnMiBarrioPageRoutingModule } from './derechosy-deberes-en-mi-barrio-routing.module';

import { DerechosyDeberesEnMiBarrioPage } from './derechosy-deberes-en-mi-barrio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DerechosyDeberesEnMiBarrioPageRoutingModule
  ],
  declarations: [DerechosyDeberesEnMiBarrioPage]
})
export class DerechosyDeberesEnMiBarrioPageModule {}
