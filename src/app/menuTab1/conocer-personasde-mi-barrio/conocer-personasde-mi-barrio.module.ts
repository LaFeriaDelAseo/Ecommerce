import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConocerPersonasdeMiBarrioPageRoutingModule } from './conocer-personasde-mi-barrio-routing.module';

import { ConocerPersonasdeMiBarrioPage } from './conocer-personasde-mi-barrio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConocerPersonasdeMiBarrioPageRoutingModule
  ],
  declarations: [ConocerPersonasdeMiBarrioPage]
})
export class ConocerPersonasdeMiBarrioPageModule {}
