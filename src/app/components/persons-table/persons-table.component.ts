import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Person } from './../../person/person.model';
import * as fromPersonActions from '../../store/actions/person.actions';
import * as fromRoot from '../../store/reducers';


@Component({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.scss']
})
export class PersonsTableComponent {

  persons$: Observable<Person[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.persons$ = this.store.select(fromRoot.getPersons);
   }

  deletePerson(person: Person) {
    this.store.dispatch(new fromPersonActions.DeletePerson(person));
  }
}
