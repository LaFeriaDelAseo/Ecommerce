import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConocerMiComunaPageRoutingModule } from './conocer-mi-comuna-routing.module';

import { ConocerMiComunaPage } from './conocer-mi-comuna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConocerMiComunaPageRoutingModule
  ],
  declarations: [ConocerMiComunaPage]
})
export class ConocerMiComunaPageModule {}
