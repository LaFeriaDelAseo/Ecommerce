import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilEditablePage } from './perfil-editable.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilEditablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilEditablePageRoutingModule {}
