import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/layout.component').then((mod) => mod.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/demo-feature/demo-feature.component').then(
            (mod) => mod.DemoFeatureComponent,
          ),
      },
    ],
  },
];
