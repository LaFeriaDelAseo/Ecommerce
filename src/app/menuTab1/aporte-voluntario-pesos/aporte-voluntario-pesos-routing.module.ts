import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AporteVoluntarioPesosPage } from './aporte-voluntario-pesos.page';

const routes: Routes = [
  {
    path: '',
    component: AporteVoluntarioPesosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AporteVoluntarioPesosPageRoutingModule {}
