import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmprendimientosDeMiBarrioPageRoutingModule } from './emprendimientos-de-mi-barrio-routing.module';

import { EmprendimientosDeMiBarrioPage } from './emprendimientos-de-mi-barrio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmprendimientosDeMiBarrioPageRoutingModule
  ],
  declarations: [EmprendimientosDeMiBarrioPage]
})
export class EmprendimientosDeMiBarrioPageModule {}
