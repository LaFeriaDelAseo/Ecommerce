import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContabilidadDeMiBarrioPageRoutingModule } from './contabilidad-de-mi-barrio-routing.module';

import { ContabilidadDeMiBarrioPage } from './contabilidad-de-mi-barrio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContabilidadDeMiBarrioPageRoutingModule
  ],
  declarations: [ContabilidadDeMiBarrioPage]
})
export class ContabilidadDeMiBarrioPageModule {}
