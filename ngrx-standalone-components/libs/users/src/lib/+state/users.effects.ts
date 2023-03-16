import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as UsersActions from './users.actions';
import * as UsersFeature from './users.reducer';
import { UsersEntity } from './users.models';

import { switchMap, catchError, of } from 'rxjs';

const createUsersEntity = (id: string, name = ''): UsersEntity => ({
  id,
  name: name || `name-${id}`,
});


@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.initUsers),
      
      switchMap(() => of(UsersActions.loadUsersSuccess({ users: [createUsersEntity('PRODUCT-AAA')] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(UsersActions.loadUsersFailure({ error }));
      })
    )
  );
}
