import { Route } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromUsers from './+state/users.reducer';
import { UsersEffects } from './+state/users.effects';

export const usersRoutes: Route[] = [
  {
    path: '',
    component: UsersComponent,
    providers: [
      provideState(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
      provideEffects(UsersEffects),
    ],
  },
];
