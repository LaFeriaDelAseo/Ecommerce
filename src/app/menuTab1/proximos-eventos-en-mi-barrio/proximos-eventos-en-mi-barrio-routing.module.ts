import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProximosEventosEnMiBarrioPage } from './proximos-eventos-en-mi-barrio.page';

const routes: Routes = [
  {
    path: '',
    component: ProximosEventosEnMiBarrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProximosEventosEnMiBarrioPageRoutingModule {}
