import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromPersonActions from '../../store/actions/person.actions';
import * as fromRoot from '../../store/reducers';


@Component({
  selector: 'app-add-person-button',
  templateUrl: './add-person-button.component.html',
  styleUrls: ['./add-person-button.component.scss']
})
export class AddPersonButtonComponent {

  display = false;
  person = {
    name: '',
    job: '',
    age: '',
    nick: '',
    employee: false,
  };

  constructor(private store: Store<fromRoot.State>) { }

  closeDialog() {
    this.display = false;
  }

  showDialog() {
    this.display = true;
  }

  addPerson() {
    this.closeDialog();
    this.store.dispatch(new fromPersonActions.AddPerson(this.person));
    this.person = {
      name: '',
      job: '',
      age: '',
      nick: '',
      employee: false,
    };
  }
}
