import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { PersonService } from './../../services/person.service';
import * as fromPersonActions from './../actions/person.actions';

@Injectable()
export class PersonEffects {

  constructor(
    private actions$: Actions,
    private personService: PersonService
    ) {}

  @Effect()
  loadPersons$ = this.actions$
  .pipe(
    ofType(fromPersonActions.LOADPERSONS),
    switchMap(() => {
      return this.personService.getPersons()
      .pipe(
        map(persons => new fromPersonActions.LoadPersonsSucces(persons))
      );
    })
  );
}
