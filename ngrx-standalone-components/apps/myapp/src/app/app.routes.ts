import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () =>
      import('@ngrx-standalone-components/users').then((m) => m.usersRoutes),
  },
];
