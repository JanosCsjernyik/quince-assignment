import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromPerson from './person.reducer';

export interface State {
  person: fromPerson.PersonState;
}

export const reducers: ActionReducerMap<State> = {
  person: fromPerson.reducer,
};

export const selectPersonState = createFeatureSelector<fromPerson.PersonState>('person');
export const getPersons = createSelector(selectPersonState, fromPerson.getPersons);
export const getInteractedWith = createSelector(selectPersonState, fromPerson.getInteractedWith);
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
