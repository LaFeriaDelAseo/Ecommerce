import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuePuedoHacerEnMiBarrioPage } from './que-puedo-hacer-en-mi-barrio.page';

const routes: Routes = [
  {
    path: '',
    component: QuePuedoHacerEnMiBarrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuePuedoHacerEnMiBarrioPageRoutingModule {}
