import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'proximos-eventos-en-mi-barrio',
    loadChildren: () => import('./menuTab1/proximos-eventos-en-mi-barrio/proximos-eventos-en-mi-barrio.module').then( m => m.ProximosEventosEnMiBarrioPageModule)
  },
  {
    path: 'conocer-personasde-mi-barrio',
    loadChildren: () => import('./menuTab1/conocer-personasde-mi-barrio/conocer-personasde-mi-barrio.module').then( m => m.ConocerPersonasdeMiBarrioPageModule)
  },
  {
    path: 'emprendimientos-de-mi-barrio',
    loadChildren: () => import('./menuTab1/emprendimientos-de-mi-barrio/emprendimientos-de-mi-barrio.module').then( m => m.EmprendimientosDeMiBarrioPageModule)
  },
  {
    path: 'derechosy-deberes-en-mi-barrio',
    loadChildren: () => import('./menuTab1/derechosy-deberes-en-mi-barrio/derechosy-deberes-en-mi-barrio.module').then( m => m.DerechosyDeberesEnMiBarrioPageModule)
  },
  {
    path: 'objetivos-de-desarrollo-sostenible-en-mi-barrio',
    loadChildren: () => import('./menuTab1/objetivos-de-desarrollo-sostenible-en-mi-barrio/objetivos-de-desarrollo-sostenible-en-mi-barrio.module').then( m => m.ObjetivosDeDesarrolloSostenibleEnMiBarrioPageModule)
  },
  {
    path: 'contabilidad-de-mi-barrio',
    loadChildren: () => import('./menuTab1/contabilidad-de-mi-barrio/contabilidad-de-mi-barrio.module').then( m => m.ContabilidadDeMiBarrioPageModule)
  },
  {
    path: 'que-puedo-hacer-en-mi-barrio',
    loadChildren: () => import('./menuTab1/que-puedo-hacer-en-mi-barrio/que-puedo-hacer-en-mi-barrio.module').then( m => m.QuePuedoHacerEnMiBarrioPageModule)
  },
  {
    path: 'junta-de-accion-comunal',
    loadChildren: () => import('./menuTab1/junta-de-accion-comunal/junta-de-accion-comunal.module').then( m => m.JuntaDeAccionComunalPageModule)
  },
  {
    path: 'conocer-mi-comuna',
    loadChildren: () => import('./menuTab1/conocer-mi-comuna/conocer-mi-comuna.module').then( m => m.ConocerMiComunaPageModule)
  },
  {
    path: 'perfil-visible',
    loadChildren: () => import('./perfilJuntaComunal/perfil-visible/perfil-visible.module').then( m => m.PerfilVisiblePageModule)
  },
  {
    path: 'perfil-editable',
    loadChildren: () => import('./perfilJuntaComunal/perfil-editable/perfil-editable.module').then( m => m.PerfilEditablePageModule)
  },
  {
    path: 'aporte-voluntario-dolares',
    loadChildren: () => import('./menuTab1/aporte-voluntario-dolares/aporte-voluntario-dolares.module').then( m => m.AporteVoluntarioDolaresPageModule)
  },
  {
    path: 'aporte-voluntario-pesos',
    loadChildren: () => import('./menuTab1/aporte-voluntario-pesos/aporte-voluntario-pesos.module').then( m => m.AporteVoluntarioPesosPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
