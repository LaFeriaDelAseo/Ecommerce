import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuntaDeAccionComunalPageRoutingModule } from './junta-de-accion-comunal-routing.module';

import { JuntaDeAccionComunalPage } from './junta-de-accion-comunal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuntaDeAccionComunalPageRoutingModule
  ],
  declarations: [JuntaDeAccionComunalPage]
})
export class JuntaDeAccionComunalPageModule {}
