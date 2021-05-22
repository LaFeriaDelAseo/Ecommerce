import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContabilidadDeMiBarrioPage } from './contabilidad-de-mi-barrio.page';

const routes: Routes = [
  {
    path: '',
    component: ContabilidadDeMiBarrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContabilidadDeMiBarrioPageRoutingModule {}
