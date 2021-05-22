import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuePuedoHacerEnMiBarrioPageRoutingModule } from './que-puedo-hacer-en-mi-barrio-routing.module';

import { QuePuedoHacerEnMiBarrioPage } from './que-puedo-hacer-en-mi-barrio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuePuedoHacerEnMiBarrioPageRoutingModule
  ],
  declarations: [QuePuedoHacerEnMiBarrioPage]
})
export class QuePuedoHacerEnMiBarrioPageModule {}
