import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DerechosyDeberesEnMiBarrioPage } from './derechosy-deberes-en-mi-barrio.page';

const routes: Routes = [
  {
    path: '',
    component: DerechosyDeberesEnMiBarrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DerechosyDeberesEnMiBarrioPageRoutingModule {}
