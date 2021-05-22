import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilVisiblePage } from './perfil-visible.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilVisiblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilVisiblePageRoutingModule {}
