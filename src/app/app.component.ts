import { Component, OnInit  } from '@angular/core';

import { Store } from '@ngrx/store';

import * as personActions from './store/actions/person.actions';
import * as fromRoot from './store/reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'quince-assignment';

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.dispatch(new personActions.LoadPersons());
  }
}
