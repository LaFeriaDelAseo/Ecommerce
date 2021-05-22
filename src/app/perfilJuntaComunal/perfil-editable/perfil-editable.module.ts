import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilEditablePageRoutingModule } from './perfil-editable-routing.module';

import { PerfilEditablePage } from './perfil-editable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEditablePageRoutingModule
  ],
  declarations: [PerfilEditablePage]
})
export class PerfilEditablePageModule {}
