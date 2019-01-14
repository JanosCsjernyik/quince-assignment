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
  showAlert = false;

  constructor(private store: Store<fromRoot.State>) { }

  addPerson() {
    this.checkName();
    if (!this.showAlert) {
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

  checkName() {
    this.showAlert = this.person.name.length <= 3 ? true : false;
  }

  closeDialog() {
    this.display = false;
  }

  showDialog() {
    this.display = true;
  }
}
