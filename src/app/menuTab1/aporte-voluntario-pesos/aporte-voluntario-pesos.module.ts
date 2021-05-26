import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AporteVoluntarioPesosPageRoutingModule } from './aporte-voluntario-pesos-routing.module';

import { AporteVoluntarioPesosPage } from './aporte-voluntario-pesos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AporteVoluntarioPesosPageRoutingModule
  ],
  declarations: [AporteVoluntarioPesosPage]
})
export class AporteVoluntarioPesosPageModule {}
