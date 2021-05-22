import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetivosDeDesarrolloSostenibleEnMiBarrioPageRoutingModule } from './objetivos-de-desarrollo-sostenible-en-mi-barrio-routing.module';

import { ObjetivosDeDesarrolloSostenibleEnMiBarrioPage } from './objetivos-de-desarrollo-sostenible-en-mi-barrio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetivosDeDesarrolloSostenibleEnMiBarrioPageRoutingModule
  ],
  declarations: [ObjetivosDeDesarrolloSostenibleEnMiBarrioPage]
})
export class ObjetivosDeDesarrolloSostenibleEnMiBarrioPageModule {}
