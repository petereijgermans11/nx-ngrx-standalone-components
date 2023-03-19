import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {initUsers, loadUsersSuccess} from '../+state/users.actions';
import {Store} from '@ngrx/store';
import {UsersState} from '../+state/users.reducer';
import * as UsersActions from '../+state/users.actions';
import {UsersEntity} from '../+state/users.models';

const createUsersEntity = (id: string, name = ''): UsersEntity => ({
  id,
  name: name || `name-${id}`,
});

@Component({
  selector: 'ngrx-standalone-components-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {

  constructor(private readonly store: Store<UsersState>) {
    this.store.dispatch(loadUsersSuccess({ users: [createUsersEntity('PRODUCT-AAA')] }));
  }

}
