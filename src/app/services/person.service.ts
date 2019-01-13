import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import { Person } from './../person/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons: Person[];

  constructor(private http: HttpClient) { }

  public getPersons (): Observable<Person[]> {
    return this.http.get('./assets/data/persons.json')
    .pipe(
      map(response => response as Person[])
    );
  }
}
