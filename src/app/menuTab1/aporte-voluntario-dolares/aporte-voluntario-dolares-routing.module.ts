import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AporteVoluntarioDolaresPage } from './aporte-voluntario-dolares.page';

const routes: Routes = [
  {
    path: '',
    component: AporteVoluntarioDolaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AporteVoluntarioDolaresPageRoutingModule {}
