import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConocerMiComunaPage } from './conocer-mi-comuna.page';

const routes: Routes = [
  {
    path: '',
    component: ConocerMiComunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConocerMiComunaPageRoutingModule {}
