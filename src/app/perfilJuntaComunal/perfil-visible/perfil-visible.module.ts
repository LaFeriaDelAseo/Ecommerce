import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilVisiblePageRoutingModule } from './perfil-visible-routing.module';

import { PerfilVisiblePage } from './perfil-visible.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilVisiblePageRoutingModule
  ],
  declarations: [PerfilVisiblePage]
})
export class PerfilVisiblePageModule {}
