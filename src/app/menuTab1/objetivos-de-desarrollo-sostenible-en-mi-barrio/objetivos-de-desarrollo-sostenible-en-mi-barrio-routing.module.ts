import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjetivosDeDesarrolloSostenibleEnMiBarrioPage } from './objetivos-de-desarrollo-sostenible-en-mi-barrio.page';

const routes: Routes = [
  {
    path: '',
    component: ObjetivosDeDesarrolloSostenibleEnMiBarrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjetivosDeDesarrolloSostenibleEnMiBarrioPageRoutingModule {}
