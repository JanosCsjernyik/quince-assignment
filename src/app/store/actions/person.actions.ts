import { Action } from '@ngrx/store';

import { Person } from './../../person/person.model';


export const ADDPERSON = '[Person] Add Person';
export const DELETEPERSON = '[Person] Delete Person';
export const LOADPERSONS = '[Person] Load Persons';
export const LOADPERSONSSUCCES = '[Person] Load Persons Succes';


export class AddPerson implements Action {
  readonly type = ADDPERSON;

  constructor(public payload: Person) {}
}

export class DeletePerson implements Action {
  readonly type = DELETEPERSON;

  constructor(public payload: Person) {}
}

export class LoadPersons implements Action {
  readonly type = LOADPERSONS;
}

export class LoadPersonsSucces implements Action {
  readonly type = LOADPERSONSSUCCES;

  constructor(public payload: Person[]) {}
}


export type PersonActions =
  | AddPerson
  | DeletePerson
  | LoadPersons
  | LoadPersonsSucces;
