import { PersonState } from './person.reducer';
import { Person } from './../../person/person.model';

import * as fromPersonActions from './../actions/person.actions';


export interface PersonState {
  persons: Person[];
  interactedWith: boolean;
}

export const initialState: PersonState = {
  persons: null,
  interactedWith: false
};

export function reducer(
  state = initialState,
  action: fromPersonActions.PersonActions): PersonState {
  switch (action.type) {
    case fromPersonActions.ADDPERSON:
      const personToAdd = action.payload;
      return {
        ...state,
        persons: [...state.persons, personToAdd],
        interactedWith: true
      };

    case fromPersonActions.DELETEPERSON:
      const personToDelete = action.payload;
      return {
        ...state,
        persons: state.persons.filter((person) => person !== personToDelete),
        interactedWith: true
      };

    case fromPersonActions.LOADPERSONSSUCCES:
      const persons = action.payload;
      return {
        persons: persons,
        interactedWith: false
      };

    default:
      return state;
  }
}

export const getPersons = (state: PersonState) => state.persons;
export const getInteractedWith = (state: PersonState) => state.interactedWith;

