import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmprendimientosDeMiBarrioPage } from './emprendimientos-de-mi-barrio.page';

const routes: Routes = [
  {
    path: '',
    component: EmprendimientosDeMiBarrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmprendimientosDeMiBarrioPageRoutingModule {}
