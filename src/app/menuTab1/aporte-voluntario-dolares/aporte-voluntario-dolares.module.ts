import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AporteVoluntarioDolaresPageRoutingModule } from './aporte-voluntario-dolares-routing.module';

import { AporteVoluntarioDolaresPage } from './aporte-voluntario-dolares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AporteVoluntarioDolaresPageRoutingModule
  ],
  declarations: [AporteVoluntarioDolaresPage]
})
export class AporteVoluntarioDolaresPageModule {}
