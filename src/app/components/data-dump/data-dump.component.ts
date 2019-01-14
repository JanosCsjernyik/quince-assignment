import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Person } from './../../person/person.model';
import * as fromRoot from '../../store/reducers';


@Component({
  selector: 'app-data-dump',
  templateUrl: './data-dump.component.html'
})
export class DataDumpComponent {

  persons$: Observable<Person[]>;
  interactedWith$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.persons$ = this.store.select(fromRoot.getPersons);
    this.interactedWith$ = this.store.select(fromRoot.getInteractedWith);
   }
}
