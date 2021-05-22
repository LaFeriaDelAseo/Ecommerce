import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuntaDeAccionComunalPage } from './junta-de-accion-comunal.page';

const routes: Routes = [
  {
    path: '',
    component: JuntaDeAccionComunalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuntaDeAccionComunalPageRoutingModule {}
