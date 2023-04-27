import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Showcase homepage',
    loadChildren: () =>
      import('./showcase-home/showcase-home.module').then(
        (m) => m.ShowcaseHomeModule
      ),
  },
  {
    path: 'base',
    title: 'Base components',
    loadChildren: () =>
      import('./showcase-base/showcase-base.module').then(
        (m) => m.ShowcaseBaseModule
      ),
  },

  {
    path: '**',
    redirectTo: '/',
    // pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
