import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProximosEventosEnMiBarrioPageRoutingModule } from './proximos-eventos-en-mi-barrio-routing.module';

import { ProximosEventosEnMiBarrioPage } from './proximos-eventos-en-mi-barrio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProximosEventosEnMiBarrioPageRoutingModule
  ],
  declarations: [ProximosEventosEnMiBarrioPage]
})
export class ProximosEventosEnMiBarrioPageModule {}
