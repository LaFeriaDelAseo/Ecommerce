import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConocerPersonasdeMiBarrioPage } from './conocer-personasde-mi-barrio.page';

const routes: Routes = [
  {
    path: '',
    component: ConocerPersonasdeMiBarrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConocerPersonasdeMiBarrioPageRoutingModule {}
